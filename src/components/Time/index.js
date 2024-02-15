import React from 'react'
import './index.css';
import { useState , useEffect} from 'react';

const Time = () => {
    const[hour,setHour]=useState(new Date().getHours());
    const[min,setMin]=useState(new Date().getMinutes());
    // const[sec,setSec]=useState(new Date().getSeconds());

    useEffect(
      ()=>{
        console.log("hello")
        setInterval(() => {
            
          if(hour>12){
            setHour(new Date().getHours()-12);
          }else if(new Date().getHours()===0){
            setHour(12);
          }else{new Date().getHours()}
          setMin(new Date().getMinutes());
        }, 1000);
      },[]
    );

    return <div className='mainDiv'>
        <div className='hour'>
            {hour>9?"":0}{hour}
        </div>
        <div className='min'>
            {min>9?"":0}{min}
        </div>
    </div>;
}

export default Time