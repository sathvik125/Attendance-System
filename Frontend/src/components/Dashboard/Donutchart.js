import React from 'react'
import { PieChart } from "react-minimal-pie-chart";
export const Donutchart = ({ present = 15,
    absent = 10,
    color1 = "rgba(255, 255, 255, 0.15)",
    color2 = "white",
    width="none",
    height="none",}) => {
    
//  const data = {
//     [{ title: 'One', value: 10, color: '#E38627' },
//     { title: 'Two', value: 15, color: '#C13C37' },
//     { title: 'Three', value: 20, color: '#6A2135' },
//  ]};
  
//  const options = {
//     title: "My Daily Activities",
//     pieHole: 0.4,
//     is3D: false,
//   };
// if()
  return (
    <PieChart
    data={[
        { title: "Absent", value: absent, color: color1 },
        { title: "Present", value: present, color: color2 },
      ]}
      lineWidth={25}
      style={{width: width, height: height}}
/>
  );
}
