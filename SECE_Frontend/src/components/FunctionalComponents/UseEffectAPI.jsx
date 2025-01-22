import { useEffect, useState } from "react";
import axios from 'axios';

const UseEffectAPI = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {console.log(res.data); 
                setPosts(res.data) 
            })
            .catch((err) => { console.log(err); })
    }, []);

    return (
        <>
            <h2>This is a page meant for using with API.</h2>
            <h3>The contents inside my API posts are:</h3>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px",
                padding: "20px"
            }}>
                {posts.map((post) => (
                    <div 
                        key={post.id} 
                        style={{border: "1px solid #ccc",borderRadius: "8px",
                            padding: "10px",textAlign: "center"}}>

                        <img 
                            src={post.image} 
                            alt={`Post ${post.id}`} 
                            style={{ width: "100%", borderRadius: "8px" }} />
                        <h4>{post.title}</h4> 
                        <p>{post.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default UseEffectAPI;