import React, { useState,useEffect } from 'react'
// import {StudentDetailsList} from "../attedancecomponents/StudentDetailsList"
import { getreport,Updatereport ,getstoredReport} from '../../Firebasefuncs'
import { Card } from '../attendancecard/Card'
import logo from "../../assets/giphy.gif"
import { CSVLink } from "react-csv";
import {getDoc, doc} from "firebase/firestore"
import { db } from '../../Firebase'
export const Report = () => {
    const l=['01', '02', '03', '04', '05', '06', '07', '08', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '49', '50', '51', '52', '54', '55', '56', '57', '58', '59', '60', 'L01', 'L02', 'L03', 'L04', 'L05', 'L06']
    const [f,setflag]=useState(false);
    const [percentage,setpercentage]=useState({});
    const [data1,setdata1]=useState([]);
    const [rf,sf1]=useState(false);
    const get=async()=>{
        const ref=await doc(db,"Reports","latest");
          const col=await getDoc(ref);
          const data1=col.data(); 
    // await setdata1(data1);
    const arr = []
    const d1={};
    for (const key in data1) {
    
        // console.log(`${key}: ${data1[key]}`);
        // arr[key]=data1[key];
        if(key!=='date')
        arr.push([[`${key} `],['name'], [`${data1[key]}`]] );
    }
    // arr[9]=1382372
    arr.sort();
    arr.unshift([['rollno'],["NAME"],["Percentage"]]);
    console.log(arr);
    await setdata1(arr);
    // const arr = Object. values(obj)
    sf1(true);
    
    }
    const setLatest=async()=>{
        console.log("in latest");
        setpercentage({});
        await Updatereport();
        await setpercentage(await getstoredReport());
        console.log("done updating");
    }
 
    // const fun=async(id)=>{
    //     return await Reports(id);
    // }
    const fun1=()=>{
        if(Object.keys(percentage).length===0){
            return (<img src={logo} alt="studentimg" />);
        }
        else{
           // console.log("sdsdshdsiuediuhewduwe",percentage["LE01"]); 

            return (
                l.map(el=>{
                    return (
                    <li>
                        
                      <Card flag={1} name={el} report={true} per={percentage[el]} img={require(`../../assets/student_images/${el}.jpg`) }/>
                    </li>
              )
                  })

            );
        }
    }
    useEffect(() => {
    
        //Runs only on the first render
        var data={};
        const fun=()=>{
            l.map(async(el)=>{
                const val=await getreport(el);
                data[el]=val;
              
              setpercentage({...data});
            })
            // console.log("done");
            // await Reports("02"); 
        } 
        fun();
        
    // console.log(Object.keys(percentage).length)
    // console.log(percentage);
      },[]);

  return (

    <div >
        <header className='flex  justify-center text-3xl'>

            <h1>Report Until "some date"</h1>
          
        </header>
        {
            rf===false &&
            <button className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-4' onClick={()=>{setflag(true);get()}}>Generate Report File</button>
        
        }
        {
            rf &&
            <CSVLink data={data1} >
                Download me
                </CSVLink>
            // <button className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-4'>Download</button>
        
        }
    <div className='flex justify-center text-3xl'>

        <button  className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-4' onClick={setLatest}>Generate Latest</button>
    </div>
   
        <ul className='flex flex-wrap justify-center content-center'>
    {
        fun1()
       }
    
    
  </ul>
    </div>

  )

}
