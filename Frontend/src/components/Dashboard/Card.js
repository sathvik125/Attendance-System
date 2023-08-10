import React from 'react'
import { Link } from 'react-router-dom';
export const Card = ({title,count=63,info,body,mainicon}) => {
    // title="totalstudents"
    // count=65;
  return (
    <div className="dashboard-card  m-7">
      <div className="dashboard-card--header">
        <div  className="dashboard-card--icon"> 
       
        {mainicon}
        </div>
        <div className="dashboard-card--title">
          <p className="title-name">{title}</p>
          <p className="title-count">{count}</p>
        </div>
      </div>

      <div className="dashboard-card--body">
        {body}
        </div>

      <div className="dashboard-card--footer">
        <p>More info</p>
       <Link to={`/${info}`}>
       
        <i class="fa-solid fa-arrow-right fa-2x"></i>
       </Link>
        
        
        
      </div>
    </div>
  )
}
