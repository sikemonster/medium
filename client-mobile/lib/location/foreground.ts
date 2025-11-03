import { getCurrentPositionAsync, getLastKnownPositionAsync, LocationObject, requestForegroundPermissionsAsync } from "expo-location";

export async function getLocation() {
  const current = await getCurrentPosition() ?? await getLasKnownPosition()
  return current;
}

export async function getLasKnownPosition() {
  const permission = await requestForegroundPermissionsAsync();
  let location: LocationObject | null | undefined = null;
  try {
    if (permission.granted)
      location = await getLastKnownPositionAsync()
    else throw new Error(`Foreground permission: ` + permission.status)
  }
  catch (ex) {
    console.log(ex)
  }

  return location;

}

export async function getCurrentPosition() {

  const permission = await requestForegroundPermissionsAsync();
  let location: LocationObject | null | undefined = null;

  if (permission.granted) {
    try {
      console.log("Getting current location")

      location = await getCurrentPositionAsync()

      console.log('android', permission.android)

    }
    catch (e) {
      console.error(e)
    }
    console.log("LOCATION", location)
    return location;

  }


}

