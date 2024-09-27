import React from 'react'
import { Popup1 } from './Popup'
export const StudentDetailsCard = ({img,content,desc}) => {
  return (
    <>
    <div className='flex  justify-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-7 ' >
        <img className="rounded-t-lg  "  style={{ width: 200, height: 280 }} src={img} alt="studentimg" onClick={<Popup1/>}/>
        <div className="p-5">
        
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">content</h5>
     
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">desc</p>
        
    </div>
    </div>
    
    </>

    
  )
}
