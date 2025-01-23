import { useRef, useState, useEffect } from "react";

const UseRefExample = () => {
    var [text, setText] = useState(""); 
    var preRender = useRef(""); 

    useEffect(() => {
        console.log(preRender.current); 
        preRender.current = text; 
    }, [text]); 

    return (
        <div className="">
            <h2>This is UseRef Example</h2>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <h4>Entered text is: {text}</h4>
            <h4>Previous text was: {preRender.current}</h4>
        </div>
    );
};

export default UseRefExample;
