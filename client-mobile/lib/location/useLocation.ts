import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { getLasKnownPosition, getLocation } from './foreground';

export default function useLocation() {
  const [location, setLocation] = useState<Location.LocationObject | null | undefined>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);



  useEffect(() => {
    getLocation().then(setLocation)
  }, [])



  return [location, errorMsg];
}

