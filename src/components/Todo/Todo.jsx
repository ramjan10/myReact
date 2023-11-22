import { useState } from "react";

export default function Todo(){
    const [state, setState] = useState({
        task:'',
    });

    //todo list
    const [list, setList] = useState([]);
    
    const hadleInput = (e) =>{
        const {name, value} =  e.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const submitForm = (e) => {
        e.preventDefault();
        
        const listItem = [
            ...list,
            state.task,
        ];
        //set to list
        setList(listItem);
    }

    //clear list
    const clearList = () =>{
        state.task= '',
        setList([]);
    }

    

    //list data
    const taskList = list.map((item, index)=> <li key={index}>{item} <button type="button">X</button></li>)

    return (
        <div>
            <form onSubmit={submitForm}>
                <fieldset>
                    <legend>Enter you task</legend>
                    <input type="text" name="task" placeholder="Task" value={state.task} onChange={hadleInput}/>
                    <button type="submit"> Submit </button>
                    <button type="button" onClick={clearList}> Clear </button>
                </fieldset>
            </form>
            <fieldset>
                <p>Added task</p>
                <ul>
                    {taskList}
                </ul>
            </fieldset>
        </div>
    );
}
