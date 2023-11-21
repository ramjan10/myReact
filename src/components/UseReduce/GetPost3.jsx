import { useContext, useEffect } from 'react';
import apiContext from './GetPost2';

export default function GetPost3(){

    const userContext = useContext(apiContext);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .then((data)=>{
            userContext.apiDispatch({
                type: 'success',
                data : data,
                
            })
        })
        .catch(()=>{
            userContext.apiDispatch({
                type: 'error',
                data:{},
            })
        })
    },[])


     return (
        <div>
             
        </div>
    );
}