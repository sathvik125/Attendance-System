import React, { useState } from 'react'
import '../Login/login.css';
import {  useNavigate } from 'react-router-dom';
export const Signup = () => {
    const [email,setemail]=useState("");
    const [pswd,setpswd]=useState("");
    const [name,setname]=useState("");
    
    const navigate = useNavigate();
  const handleSubmit=async(event)=>{
    event.preventDefault();
    console.log(event.target.value);
      const f={"email":`${email}`,"password":`${pswd}`,"name":`${name}`};
    //   console.log(f);
      const resp=await fetch('http://127.0.0.1:5000/signup',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(f)})
        const rpl=(await resp.text());
        if(rpl){
          console.log(rpl);

          if(rpl && rpl==="yes"){
              alert("success created account ")
          navigate("/login");
          }

        //   else{
        //     alert("no account found with this email and password");
        //     navigate("/")

        //   }
       
        }
        
  
    }
    return (
      <>
      <h1>Signup PAGE</h1>
      <div className='form1'>
        <form onSubmit={handleSubmit}>
        <span>Enter you Name</span>
        <br />
        <input type="text" name="name" id="name" onChange={(event) => setname(event.target.value)}/>
          <br />
         
          {/* <br /> */}
          <br></br>
          <span>Enter you Email</span>

          <br />
          <input type="email" name="Email" id="email" onChange={(event) => setemail(event.target.value)}/>
          {/* <br /> */}
          <br></br><br></br>
          <span>Enter your Password</span>
          <br />
          <input type="password" name="Password" id="pass" onChange={(event) => setpswd(event.target.value)}/>
          <br /><br />
          <button className='Button'style={{marginLeft:"30%" }} >Signup</button>
          <br /><br />

        </form>
      </div>
     
      </>
    )
}
