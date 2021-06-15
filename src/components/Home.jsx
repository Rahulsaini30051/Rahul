import '../App.css';
import {useState} from 'react';
import {Link} from "react-router-dom"

function App() {

  const[inputs,setInputs]=useState("");
  const[items,setItems]=useState([]);

  const allInputs=(event)=>{
    setInputs(event.target.value);
   }

  const addProduct=(event)=>{
   setItems((olddata)=>{
     return [...olddata,inputs];
   })
  }
  return (
    <div className="App-header"> 
    <h1 style={{ marginTop:"-180px",fontSize:"80px"}}>Welcome to the Home Page</h1>
<Link to={"/users"}>

    <button style={{ marginTop: "-1px", position: "absolute", marginLeft:"350px" ,backgroundColor:"black", height:"40px",color:"blueviolet", borderRadius:"10px"}}>Show API Users(Answer 2)</button>
</Link>
     <input style={{height:"30px", width:"300px",borderRadius:"10px"}} placeholder="Enter product" onChange={allInputs} /><br/>
     <button style={{borderRadius:"10px",backgroundColor:"black", color:"blueviolet",height:"40px",width:"200px"}} onClick={addProduct}> Add Product</button><h1>All Items</h1>
     {
       items.map((allitems)=>{
         return <li >{allitems}</li>
       })
     }
    </div>
  );
}

export default App;
