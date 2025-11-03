import type { LocationObject } from 'expo-location';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import { useSyncExternalStore } from 'react';


const LOCATION_TASK_NAME = 'background-location-task';
const MAX_LOCATIONS = 5

let lastLocation: LocationObject | undefined | null;
let locations: LocationObject[] = []

type Listener = () => void
let listeners: Array<Listener> = []


const store = {
  setLocations(los: LocationObject[]) {
    locations.push(...los)
    locations = locations.slice(-MAX_LOCATIONS)
    emitChange()
  },
  setLastLocation(los: LocationObject[]) {
    console.assert(this === store)
    lastLocation = los.at(los.length - 1)
    emitChange();
  },
  subscribe(listener: Listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },
  getSnapshot() {
    return {
      lastLocation
    };
  }
};




export function useBackgroundLocation() {

  const data = useSyncExternalStore(store.subscribe, store.getSnapshot);

  return data

}






export async function stopBackgroundLocationTask() {
  Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME)
}

export async function startBackgroundLocationTask() {
  const { status: fg } = await Location.requestForegroundPermissionsAsync()
  if (fg === "granted") {
    const { status: bg } = await Location.requestBackgroundPermissionsAsync();
    if (bg === "granted") {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Balanced
      });
    }
  }
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}



TaskManager.defineTask(LOCATION_TASK_NAME, locationTaskCallback);



// LocationObject type:
// https://docs.expo.dev/versions/latest/sdk/location/#locationobject
type TaskData = {
  data?: {
    locations: LocationObject[]
  }
  error?: TaskManager.TaskManagerError | null
}
async function locationTaskCallback(args: TaskData) {

  const { data, error } = args

  if (error) {
    // Error occurred - check `error.message` for more details.
    return;
  }
  if (data) {
    const { locations } = data;
    store.setLastLocation(locations)
    store.setLocations(locations)
  }
}
