
import { useState } from "react";

function useForm(initialValue) {
    const [values, setValues] = useState(initialValue);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    return { values, handleChange };
}

export default useForm;
