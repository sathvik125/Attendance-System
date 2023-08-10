import React, { useEffect, useState } from 'react'
import {  markAttendance } from '../../Firebasefuncs';
export const CircleIcon = ({num,flag1,dataref}) => {
//  console.log("yes");
  const [flag,setflag]=useState(flag1);
  // console.log(flag);
  const cursor="pointer";
  useEffect(() => {
    const fun=async()=>{
       await  markAttendance(num,flag);

      }
      fun();
    }, [flag,num]);
  return (
    <div onClick={()=>{setflag(!flag)}} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' ,cursor: cursor }} >
{/* <i class="fa-regular fa-circle fa-4x" style={{color:'green'}}></i> */}
<i class="fa-solid fa-circle fa-4x"   style={flag===true?{color: '#25b006'}:{color: '#ea2424'}}></i>
<span style={{ fontSize: 20, position: 'absolute' }}>{num}</span>
</div>
  )
}
