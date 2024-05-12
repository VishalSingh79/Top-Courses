import React  from 'react'
import { useState } from 'react';
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
{/*  <FcLike style={{fontSize:'25px'}}/>  */}
// 
function Card({ecourse,clickHandler,likedCourses}) {
    const desc=`${ecourse.description.substring(0,100)}...`;
    let id=ecourse?.id;
    
  
  return (
    <div className='card'>
          <img src={ecourse?.image?.url}
            alt={ecourse?.image?.alt}
            className='image'
            width='230px'
            height='150px'
          />
           <span className='like' onClick={()=>clickHandler(id)}>
           {
            (likedCourses.includes(id))? 
             <FcLike style={{fontSize:'25px'}}/> :
             <FcLikePlaceholder style={{fontSize:'25px'}}/>
           }
           </span>
          <div className='data'>
              <div className='title'>{ecourse.title}</div>
              <div className='desc'>{desc} </div>
          </div>
    

    </div>
  )
}

export default Card
