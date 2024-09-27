import React, { useEffect, useState } from 'react'
import { CircleIcon } from './CircleIcon';
import { databaseRef,intialiseAttendance} from '../../Firebasefuncs';
import logo from "../../assets/giphy.gif"
import { todaysdate } from '../Date/Date';
export const ManualAttendance = () => {
  const l=['01', '02', '03', '04', '05', '06', '07', '08', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '49', '50', '51', '52', '54', '55', '56', '57', '58', '59', '60', 'L01', 'L02', 'L03', 'L04', 'L05', 'L06']
const flag=1;
  // const l=['01', '02', '03', '04']
 const [dataref,setref]=useState(""); //to retrieve previous attendance if marked
 const [display,setdisplay]=useState(false);
 useEffect(() => {
   const fun=async()=>{
    await intialiseAttendance();
    const val=await databaseRef();
   setref(val);
   setdisplay(true);
  }
  fun();
},[flag]);

const showitems=()=>{
  if(display===true){

    return (
      l.map(el=>{
        
        return (
        
        <li className='m-4' >
    
          <CircleIcon num={el}  flag1={dataref[el]===undefined?true:dataref[el]} data={dataref}/>
        </li>
  )
      })
    )

  }
  else{
    return (

      <img src={logo} alt="studentimg" />
    )
  }
}
 const handlesubmit=()=>{
// console.log(current)
console.log(dataref);
 }
  return (
<div>
  <h1 className='flex justify-center text-2xl'>
    Todays Date:{todaysdate}
  </h1>
<ul className='flex flex-wrap justify-center m-5 ' id='studentdisplay' >
    {
      showitems()
    }
  </ul>
  <div className='flex flex-wrap justify-center	'>

<button onClick={handlesubmit} className=' rounded-full p-2' style={{backgroundColor:"#0063f7"}}>Submit</button>
  </div>
</div>
  )
}
