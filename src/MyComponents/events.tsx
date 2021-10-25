import React from 'react';
import './events.css';
import devday from '../images/devday.jpg';
import codercup from '../images/codercup.jpg';

interface Props {

  eventname:string;
    
}

export const events:React.FC<Props>=({eventname})=>{
  return (
    <>
     <div className="card" style={{width:'18rem'}}>
               <img src={devday} className="imgss" alt="pic1"/>
               <div className="card-body">
               <p className="card-text">{eventname}</p>
     </div>
     </div>
     
    </>
  );
}