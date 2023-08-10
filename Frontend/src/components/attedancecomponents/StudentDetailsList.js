import React from 'react'
import { Card } from '../attendancecard/Card';
export const StudentDetailsList = ({report}) => {
  const l=['01', '02', '03', '04', '05', '06', '07', '08', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '49', '50', '51', '52', '54', '55', '56', '57', '58', '59', '60', 'L01', 'L02', 'L03', 'L04', 'L05', 'L06']
  return (
    <ul className='flex flex-wrap justify-center content-center'>
    {
      l.map(el=>{
        return (
        <li>
          <Card flag={1} name={el} report={report} img={require(`../../assets/student_images/${el}.jpg`) }/>
        </li>
  )
      })
    }
  </ul>

//     <div className='flex  justify-center my-10'>

// <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
// {
//     l.map(student=>{
//         return(
//         <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">{student}</li>
//     );
// })
    
// }
    

// </ul>
//     </div>

  )
}
