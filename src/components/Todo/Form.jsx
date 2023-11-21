import { useState } from "react";

function Form (){
    const [state, setState] = useState({
        name:'',
        email:'',
        experties:'',
        remark:'',
    })

    const handleInput = (e) =>{
        const {name, value} = e.target;

        if(name === 'skill'){
            setState((prevState) => ({
                ...prevState,
                experties: value
            }));
        }

        setState((prevState)=>({
            ...prevState,
            [name]:value
        }));


    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(state);
    }
    return (
        <div>
            <div>
                {state.name} --- {state.email} --- {state.experties} --- {state.remark}
            </div>
            <form onSubmit={submitForm}>
                <p>
                    <input type="text" placeholder="enter name" value={state.name} name="name" onChange={handleInput}/>
                </p>
                
                 <p>
                    <input type="email" placeholder="enter email" value={state.email} name="email" onChange={handleInput}/>
                 </p>
                 <p>
                    <label htmlFor="">Eperties : </label>
                    <select name="experties" value={state.experties} onChange={handleInput}>
                        <option value="php">Php</option>
                        <option value="java">Java</option>
                        <option value="html">Html</option>
                        <option value="vue">Vue jS</option>
                        <option value="react">React js</option>
                    </select>
                 </p>
                 <p>
                    <input type="checkbox" name="skill" value="php" onChange={handleInput} /> Php
                    <input type="checkbox" name="skill" value="java" onChange={handleInput} /> Java
                    <input type="checkbox" name="skill" value="html" onChange={handleInput} /> Html
                 </p>
                 <p>
                    <textarea name="remark" value={state.remark} onChange={handleInput}></textarea>
                 </p>
                 <p>
                    <button type="submit" >submit</button>
                 </p>
            </form>
        </div>
    );
}

export default Form;