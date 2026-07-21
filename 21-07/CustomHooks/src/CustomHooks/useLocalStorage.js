import { useState , useEffect } from "react";


function useLocalStorage(key, initialvalue) {

//useState....
    const [value, setValue] = useState(() => {

        try {
            console.log(localStorage);
            const storedValue = localStorage.getItem(key);
            return storedValue !== null ? JSON.parse(storedValue) : initialvalue;

        } catch (error) {
            console.error("Error reading localStorage key:", key, error);
            return initialValue;
        }


    })

//useEffect...
    useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to localStorage key:", key, error);
    }cd

  }, [key, value]); 

  return [value, setValue];
}

export default useLocalStorage;


