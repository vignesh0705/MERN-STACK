import { useEffect, useState } from "react";
import axios from 'axios';

const UseEffectAPI = () => {
    var [post, setpost] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then((res) => { setpost(res.data) })
            .catch((err) => { console.log(err); })
    },[])
    return(
        <>
            <h2>This is page meant for using with API.</h2>
            <h3>The contents inside my JOSNPlaceholder API post are</h3>
            <ul>
                {post.map((element) =>(
                    <li key={element.id}>{element.title}</li>
                ))}
            </ul>
        </>
    );
}
export default UseEffectAPI;