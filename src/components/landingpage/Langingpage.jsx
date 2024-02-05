import React, { useState } from "react";
import 'D:/react/image-crop/src/components/landingpage/landing.css'

export const TopSection=({setUrl})=>{
const[inputvalue,setinputvalue]=useState("");

const handleinputchange=(e)=>{
    setinputvalue(e.target.value);
}

const handlebutton=()=>{
 setUrl(inputvalue)
}


return(
<>
<div className="inputs">
<input 
type="text"
value={inputvalue}
onChange={handleinputchange}
placeholder="paste url"
className="input"
></input>
<button
onClick={handlebutton}
className="btn"
>submit</button>
</div>
</>
);

};