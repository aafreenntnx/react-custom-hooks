import { useEffect } from "react";

const useUpdateLogger = (value, helpText = '') =>{
  useEffect(() => {
    console.log(helpText, value);
  }, [value]);
}

export default useUpdateLogger;