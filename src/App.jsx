import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import { apiUrl } from './components/data'
import Spinner from './components/Spinner'
import './components/Spinner.css'

function App() {
    
  const [courses,setCourses]=useState([]);
  const [spinner,setSpinner]=useState(true);
  const [categoryc,setCategoryc]=useState('ALL');
  
   useEffect(()=>{
        
          const fetchData = async()=>
          {        
          try{
             const res=await fetch(apiUrl);
             const data=await res.json();
             setCourses(data.data);
             
            }
          catch(error){
            console.log(error);
          }
          setSpinner(false);   
          }
          fetchData();
   },[])
   

  return (
    <div className='landing-page'>
        <Navbar/>

        <Filter categoryc={categoryc} setCategoryc={setCategoryc}/>

        <div className='card-details'>
           {
            (spinner)?( <Spinner/>) : (<Cards courses={courses}  categoryc={categoryc} />)
           }
        </div>
    </div>
  )
}

export default App
