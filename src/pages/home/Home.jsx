import React, { useState } from 'react'
import './home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import Skeleton from '../../Components/Skeleton/Skeleton'
const Home = ({sidebar}) => {

  const [category,setCategory] =useState(0);
  
  if(category==null)
    return<>
    <Skeleton/>
    </>
  return (
    <>
       
        <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
        <div className={`container ${sidebar?"":'large-container'}`}>
          <Feed category={category} />
        </div>
    </>
  )
  
}

export default Home