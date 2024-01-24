import React ,{useState} from 'react';

const UseEffectWithObjects= () => {
    const[student,setStudent]=useState(
        {
            name:'ABC',
            college:'SVECW'
        }
    )
    const change=()=>{
        setStudent({name:'DEF',college:'VIT'});
    }
    return (
        <div>
            <h1>{student.name}</h1>
            <h1>{student.college}</h1>
            <button onClick={change}>update</button>
        </div>
    );
};

export default UseEffectWithObjects;