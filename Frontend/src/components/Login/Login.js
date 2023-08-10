import React, { useState } from 'react'
import '../Login/login.css';
import { Link, useNavigate } from 'react-router-dom';
export const Login = () => {
    const [email,setemail]=useState("");
    const [pswd,setpswd]=useState("");
    const [name,setname]=useState("");
    
    const navigate = useNavigate();
  const handleSubmit=async(event)=>{
    event.preventDefault();
    console.log(event.target.value);
      const f={"email":`${email}`,"password":`${pswd}`,"name":`${name}`};
    //   console.log(f);
      const resp=await fetch('http://127.0.0.1:5000/login',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(f)})
        const rpl=(await resp.text());
        if(rpl){
          console.log(rpl);

          if(rpl && rpl==="yes"){
              // alert("success")
          navigate("/home");
          }
          else{
            alert("no account found with this email and password");
            navigate("/")

          }
       
        }
        
  
    }
    const handleClick=()=>{
      navigate("/signup");
    }
    return (
      <>
      <h1>LOGIN PAGE</h1>
      <div className='form1'>
        <form onSubmit={handleSubmit}>
        {/* <input type="text" name="name" id="name" onChange={(event) => setname(event.target.value)}/>
          <br /> */}
          {/* <span>Enter you Email</span> */}
          {/* <br /> */}
          {/* <br></br><br></br> */}
          <span>Enter you Email</span>
          <br />
          <input type="email" name="Email" id="email" onChange={(event) => setemail(event.target.value)}/>
          {/* <br /> */}
          <br></br><br></br>
          <span>Enter your Password</span>
          <br />
          <input type="password" name="Password" id="pass" onChange={(event) => setpswd(event.target.value)}/>
          <br />
          <br /><br />
          <button className='Button' style={{marginLeft:"30%"}} >Login</button>
        </form>
      </div>
      {/* <h1>Sign up here</h1> */}
      <br /> <br />
      <button className='Button' style={{marginLeft:"45%"}} onClick={handleClick}>Sign up here</button>
      </>
    )
}
