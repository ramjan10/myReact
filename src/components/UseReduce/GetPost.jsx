import { useEffect, useState } from "react";

export default function GetPost(){
    const [loading, setLoading] = useState(true);
    const [error, setError] =  useState('');
    const [post, setPost] =  useState({});

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then((data)=> {
            setLoading(false);
            setPost(data);
            setError('')
        })
        .catch(() =>{
            setLoading(false);
            setPost({});
            setError('there was a error');
        })
    },[])

    return(
        <div>
            {loading ? 'loading......': post.body},
            {error ? error: ''}
        </div>
    );
}