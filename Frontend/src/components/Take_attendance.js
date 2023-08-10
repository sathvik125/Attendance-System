import React, { useState } from 'react'
import { Card } from './attendancecard/Card';
import { updateAttendance } from '../Firebasefuncs';
export const Take_attendance = () => {
  const [presentList,updatepresentList]=useState([]);
  const [val,setval]=useState("P6621");
  // const current=new Date();
  // const docname=`${current.getDate()}#${current.getMonth()+1}#${current.getFullYear()}`;
  
  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // height: '10vh',
  };
  const handleClick=async()=>{
    await updateAttendance(presentList);
  }
    const handleSubmit=async(e)=>{
        let response = await fetch('http://127.0.0.1:5000/take_attendance',
            {
              method: 'post',
            }
          );
          let res = await response.text();
          console.log(res);
          if( presentList.includes(res)===false )
          updatepresentList([...presentList,res])
          else {
            alert("Already Marked");
          }
          // let path1=`../images/student_images/${res}.jpg`;
          console.log(presentList);
          setval(res);
          
        }
        return (
          <div >
        <h1  className='text-2xl my-5'style={styles}>Take attendance using face</h1> 
        <div style={styles}>
        <button onClick={handleSubmit} className='rounded-full bg-[#1da1f2] text-xl px-5 py-2'>Take</button>

        </div>

      <div className={val==="duplicate"?"imagenotshow":"imageshow"}>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black flex justify-center m-12">Todays Present List</h5>
         
<ul className='flex flex-wrap justify-center content-center'>
  {
    presentList.map(el=>{
      return (
      <li>
        <Card flag={1} name={el} img={require(`../assets/student_images/${el}.jpg`)}/>
      </li>
)
    })
  }
  <div className='flex flex-wrap justify-center	'>

<button onClick={handleClick} className=' rounded-full p-2' style={{backgroundColor:"#0063f7"}}>Submit</button>
  </div>
</ul>

   
      </div>
      
    </div>
  )
}
