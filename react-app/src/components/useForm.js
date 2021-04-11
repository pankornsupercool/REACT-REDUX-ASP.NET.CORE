import React,{useState, useEffect} from "react";

const useForm = (InitialFieldValues) =>{
    const [values,Setvalues] = useState(InitialFieldValues);

    const handleOnChanged = e => {
        const {name, value} = e.target
        Setvalues({ 
            ...values,
             [name]: value
        })
    }

    return (
        values,
        Setvalues,
        handleOnChanged
    );
}

export default useForm;