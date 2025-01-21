import { useState } from "react";

const About = () => {
    var {text, settext} = useState("vicky")
    return(
        <div>
            <h2>This is About Component.</h2>
            <h2>Textarea:</h2>
            <textarea value={text} onChange={(event)=>settext(event.target,value)}></textarea>
        </div>
    )
}
export default About;