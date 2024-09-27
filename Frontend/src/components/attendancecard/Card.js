import React from 'react'
import { Link } from 'react-router-dom'
// import { intialiseAttendance } from '../../Firebasefuncs';
// import img  from "./facial-recognition-img.jpg"
export const Card = ({img,content,desc,button,path,flag,name,report,per}) => {
  const defaultsyle={};
 const handleClick=()=>{
  console.log("click");
  // const intialise=async()=>{
  //   await intialiseAttendance();
  // }
 
  //   intialise();
    // console.log("called");
  
 }
  return (
    <>
                       
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-7 " style={flag===1?{width:240}:{defaultsyle}}>
    <div className='flex justify-center'  >
        
        <img className="rounded-t-lg m-4"  style={flag===1?{width:140,height:200}:defaultsyle}  src={img} alt="img" />
      
    </div>
    <div className={flag===1?"show":"imagenotshow"}>

    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">{name}</h5>
    {
      report && 
         <h5 className='mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center'>Attendance Percentage = {per} </h5> 
    }
    </div>
    
    <div className={flag===1?"imagenotshow":"p-5"}>
        
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{content}</h5>
     
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
        <Link to={path} onClick={handleClick} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           {button}
        </Link>
    </div>
    
</div>

    </>
  )
}
