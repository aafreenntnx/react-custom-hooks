import { useEffect } from 'react';

const useEventListener = (event, callback, element = window) => {
  useEffect(() => {
    element.addEventListener(event, callback);
    return () => element.removeEventListener(event, callback);
  }, [event, callback, element]);
};

export default useEventListener;