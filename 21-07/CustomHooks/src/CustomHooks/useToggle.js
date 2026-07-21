import { useState } from "react";


function useToggle(initialValue = false){

    const [value, setValue] = useState(initialValue);

    const Toggle = ()=>{
        setValue((prevalue) => !prevalue);
    }

    return[value , Toggle];
}

export default useToggle;