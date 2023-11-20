import { useEffect, useRef } from "react";

function Form (){
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
        inputRef.current.value = 'Ramjan';
    })
    return (
        <div>
            <p>
                <input ref={inputRef} type="text" placeholder="enter"/>
            </p>
        </div>
    );
}

export default Form;