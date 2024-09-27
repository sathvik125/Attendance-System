import React from 'react'
import { Card } from '../attendancecard/Card'
import img1  from "../../assets/facial-recognition-img.jpg"
import img2 from "../../assets/manual_attendances.jpg"
import img3 from "../../assets/Report.jpg"
export const Attendance = () => {
  return (
    <>
    <div className='flex flex-wrap justify-center content-center'>
    <Card img={img1} content={"Facial Attendance"} desc={"Take Attedance based on Facial Data"} button={"Mark Attendance"} path={"/take_face_attendance"}/>
    <Card img={img2} content={"Manual Attendance"} desc={"Take Attedance Manually"} button={"Mark Attendance"} path={"Manual_attendance"}/>
    <Card img={img3} content={"Student Report"} desc={"Generate Student Report"} button={"Open Reports"} path={"Report"}/>
    </div>
    </>
  )
}
