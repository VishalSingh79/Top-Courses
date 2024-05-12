import React from 'react'
import data from './data'
function Filter({categoryc,setCategoryc}) {
    function categoryHandler(title){
          setCategoryc(title);
  
    }
  return (
    <div className='filter-data' >
       {
            data.map((data)=>{
                return (
                    <button key={data.id} onClick={()=>categoryHandler(data.title)} 
                     className={`${(data.title==categoryc)?"btn1" :"button"} `}>{data.title}</button>
                )
            })
        }
    </div>
  )
}

export default Filter
