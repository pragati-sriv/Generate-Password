import React,{useState} from "react";

export default function Data() {
  const[pass,setPass]=useState("")
  const[length,setLength]=useState(10)
  const[includeNumber,setNumber]=useState("")
  const[includeSpecial,setIncludeSpecial]=useState("")


  function handleGenerate(){
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const smalls = "abcdefghijklmnopqstuvwxyz";
    const number="0123456789";
    const special ="!@#$%^&*()-_=+[]{}|;:,.<>?";

  let allowedChar = chars+smalls;
  if (includeNumber)allowedChar += number;
  if(includeSpecial)allowedChar+=special




  let handleGenerate = " "
  for(let i=0;i<length;i++)
  {
    let index = Math.floor(Math.random()*allowedChar.length)
    handleGenerate = handleGenerate+allowedChar[index]
  }

  setPass(handleGenerate)

  }
  return (
    <div>
     <h4>Password Generator</h4>
     <div>
     <label>Password Length:</label>
     <input type="number" value={length} onChange={(e)=>setLength(e.target.value)}/>
     </div>
     <div>
     <label>Include Number:</label>
     <input type="checkbox" checked={includeNumber} onChange={(e)=>setNumber(e.target.value)}/>
     </div>
     <div>
     <label>Include Special Character:</label>
     <input type="checkbox" checked={includeSpecial}  onChange={(e)=>setIncludeSpecial(e.target.value)} />
     </div>
     <div>
       <button onClick={handleGenerate}>Generate password</button>
       <div>Password:{pass}</div>
       </div>
    </div>
  );
}
