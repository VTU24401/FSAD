import React,

{useState} from "react";
import "./App.css";
function App()
{
  const[number, setNumber]=useState("");
  const[result, setResult]=useState("");
  const findFactorial=()=>{
    let num=parseInt(number);
    if(num<0)
    {
      setResult("Factorial Not defined");
      return;
    }
    let fact=1;
    for(let i=1;i<num;i++) {
      fact=fact*i;
    }
    setResult("Factorial:" +fact);

  }
  const findSquareRoot=()=> {
    let num=parseFloat(number);
    if(num<0)
    {
      setResult("Invalid Input");
      return;
    }
    setResult("Square Root:" +Math.Sqrt(num));
  }
  return(<div className="Container">
    <input type="number"
    placeholder="Enter a number"
  Value={number}
  onChange={(e)=>setNumber(e.target.value)}
  />
  <div className="buttons">
    <button onClick={findFactorial}>Factorial</button>
    <button onClick={findSquareRoot}>SquareRoot</button>
    </div>
    <h3> {result} </h3>
    </div>
);

}

export default App;
