
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
} from "./userSlice";


import "../App.css";
var Category = () => {
  const dispatch = useDispatch();
  const catList = useSelector((state) => {
     return state.users.user  });
  // const[total,setTotal]=useState("");
  // const[perPage,setperPage]=useState("");
  const[currentPage,setcurrentPage]=useState("1");

  useEffect(() => {
    dispatch(getUsers({currentPage}));
  }, [dispatch]);
  

  

  return (
    <div className="App-header" >
      <h1>Fetch api Data from API...</h1>
     <table id="customers">
                  <thead>
                    <tr>
                      <th>Images</th>
                      <th>First_name</th>
                      <th>Last_name</th>
                      <th>Email</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {catList.map((cat) => (
                      <tr key={cat.id}>
                        <td>
                          <img style={{width:"90px"}} alt="" src={cat.avatar} />
                        </td>
                        <td>{cat.first_name}</td>
                        <td>{cat.last_name}</td>
                        <td>{cat.email}</td>
                        <td>
                         
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table><br/>
                <button style={{ height:"30px", marginLeft:"-150px", width:"100px",color:"red",borderRadius:"15px"}} onClick={(()=>dispatch(getUsers(1)))}   className={`prvv ${currentPage === 1 ? 'disabled' : ''}`} >previous</button>
                  <button style={{ marginLeft:"80px",marginTop:"-27px", height:"30px",width:"100px",color:"red",borderRadius:"15px"}}  onClick={(()=>dispatch(getUsers(2)))}  className={`nxtt ${currentPage === 2 ? 'disabled' : ''}`}>next</button>
    </div>
  );
};

export default Category;
