import { useState } from "react";

function Skill (){
    const [skill, setSkill] = useState('')
    const handleSkill = (e)=>{
        setSkill(e.target.value)
    }
    return(
        <div>
            <p>{skill}</p>
            <select name="skill" value={skill} onChange={handleSkill}>
                 <option value="php">Php</option>
                 <option value="java">Java</option>
                 <option value="html">Html</option>
                 <option value="vue">Vue jS</option>
                 <option value="react">React js</option>
            </select>
        </div>
    );
}

export default Skill;