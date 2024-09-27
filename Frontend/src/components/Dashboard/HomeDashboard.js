import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import { Donutchart } from './Donutchart'
import { totalpresent } from '../../Firebasefuncs'

export const HomeDashboard = () => {
 const [present,setpre]=useState(0);

  useEffect(() => {
    //Runs on every render
    const call=async()=>{
      const val=await totalpresent();
      setpre(val);
    }
    call();
  });
 
  return (
   <>
   <div className='flex flex-wrap justify-center content-center'>
    <Card mainicon={<i  class="fa-solid fa-graduation-cap"></i>}info={"studentdetails"} title={"Total Students"} body={<i class="fa-regular fa-user fa-3x"></i>} />
    <Card mainicon={<i class="fa-solid fa-users"></i>} info={"todaysattendance"} title={"Todays Attendance"} body={<Donutchart present={present} absent={63-present}/> }count={`${present}/63`}/>
    <Card mainicon={<i class="fa-solid fa-book"></i>} title={"Total Subjects"} count={4}/>
    <Card mainicon={<i class="fa-solid fa-file"></i>} title={"Attendance Reports"} info={"attendance/Report"} count={"Students"} body={<i class="fa-regular fa-user fa-3x"></i>}/>
   </div>
   </>
  )
}
