import React, { useEffect, useReducer } from 'react';
import GetPost3 from './GetPost3';

export const apiContext =  React.createContext();

const initialState = {
    loading: true,
    post: {},
    error:'',
}

const reducer = (state, action) => {
    switch(action.type){
        case 'success':
            return {
                loading: false,
                post: action.data,
                error: ''
            }
        case 'error':
            return {
                loading:false,
                post: {},
                error:'there was a error',
            }
        default:
            return state;

    }
}

export default function GetPost2(){
    const [state, dispatch] =  useReducer(reducer, initialState);
    const [user, dispatch2] =  useReducer(reducer, initialState);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then((data)=>{
            dispatch({
                type: 'success',
                data : data,
            })
        })
        .catch(()=>{
            dispatch({
                type: 'error',
                data:{},
            })
        })
    },[])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .then((data)=>{
            dispatch2({
                type: 'success',
                data : data,
            })
        })
        .catch(()=>{
            dispatch2({
                type: 'error',
                data:{},
            })
        })
    },[])

    return (
        <div>
             {state.loading ? 'loading......': state.post.body},
             <hr /> <hr />
             {user.loading ? 'loading......': user.post.name},

            <apiContext.Provider value={{apiDispatch: dispatch}}>
                 <GetPost3 />
            </apiContext.Provider>
             {state.error ? state.error: ''}
        </div>
    );
}