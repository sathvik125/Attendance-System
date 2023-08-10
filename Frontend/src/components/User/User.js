import React from 'react'
import "./User.css"
import logo from "../../assets/giphy.gif"
export const User = () => {
  return (
    // <div className='max-w-screen max-h-screen flex justify-center'>

    <div className= 'bg-white drop-shadow-2xl  max-w-4xl m-auto'>
        
        <div className='flex justify-center my-4' >

        <img style={{ "height":" 200px",
        "width": "150px",
        "margin-top": "50px"}} src={logo}  alt="" />
        </div>
        <h1 className='text-3xl text-center'>Actula Hanumanth Rao</h1>  
        <table>
         
                  <tr>
          <td>
          Branch
          </td>
          <td>Machine Learning</td>
          </tr>
          <tr>
          <td>
           Section
          </td>
          <td>AIML-A</td>
          </tr>
           <tr>

          <td>
          ID No
          </td>
          <td>5432178</td>
          </tr>
        </table>
        {/* <span className='text-xl ml-7 text-left'>Name</span>
        <span className=''>Sathvik Reddy Kasarla</span> */}
        
    </div>
    // </div>
    
  )
}
