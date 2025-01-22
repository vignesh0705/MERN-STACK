import useState from "./UseState";

const UseEffect = () => {
    var [text, setText] = useState("");
    return(
        <div>
            <h1> This UseEffect example.</h1>
            <input type="Number" value={text} onChange={(e) => {setText(e.target.value)}}></input>
        </div>
    )
}
export default UseEffect;