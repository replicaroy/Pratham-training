import { useState } from "react";

function useForm(intialValue){
    const [vlaues, setValues] = useState(intialValue);
    const handleChange = (e)=> {
        const {name,value} = e.target;
        setValues({...vlaues,[name]:value})
    }
    retrun [vlaues, handleChange];
}