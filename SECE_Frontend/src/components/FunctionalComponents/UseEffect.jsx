import { useState, useEffect } from "react";

const UseEffect = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    if (!isNaN(value) && /^[0-9]*$/.test(value)) {
      setText(value); 
      console.log(`Input changed: ${value}`);
    }
  };

  useEffect(() => {
    if (text) {
      setMessage(`You entered: ${text}`);
    } else {
      setMessage("Please enter a value.");
    }
  }, [text]); 

  return (
    <div>
      <h1>This is a UseEffect example.</h1>
      <input type="number" value={text} onChange={handleChange} placeholder="Enter a number"/>
      <p>{message}</p>
    </div>
  );
};

export default UseEffect;