import React, { useState } from 'react'
import Card from './Card'
import { toast } from 'react-toastify';

function Cards({courses,categoryc}) {
   let allcourses=[];
   const [likedCourses,setLikedCourses]=useState([])
   const getcourses=()=>{
       if(categoryc==="ALL"){
        Object.values(courses).forEach((courseCategory)=>{
        courseCategory.forEach((course)=>{
        allcourses.push(course);
            })
          })
       return allcourses;
        }
       else{
         let category=Object.keys(courses).filter((cid)=>cid===categoryc);
         let arr=courses[`${category}`];     
         Object.values(arr).forEach((ecourse)=> allcourses.push(ecourse));       
         return allcourses;
       }
     
   }
  function clickHandler(id)
  {
        if(likedCourses.includes(id))
          {
              let newLikedCourses=likedCourses.filter((keys)=> keys!==id)
              //course remove ho gya
              setLikedCourses(newLikedCourses); 
              toast.warning("Like Removed");
          }
          else{
            if(likedCourses.length===0) {
            setLikedCourses([id]);
            }
            else{
             setLikedCourses((prev)=>[...prev,id]);
             //course add ho gya hai
            }
             toast.success("Liked Successfully");
          }
  }
   
    
  return (
    <div className='all-cards'>
        {
               getcourses().map((ecourse)=>{
               return (<Card key={ecourse?.id}  ecourse={ecourse} likedCourses={likedCourses} clickHandler={clickHandler}/>)
          })
        }
    </div>
  )
}

export default Cards
