import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { NavLink, Outlet, Route, Routes } from 'react-router-dom'
import SkinsCard from './SkinsCard'



function Chapions({skin}) { 
  
const [sourse,setsourse]=useState(skin)
const p=useRef()



useEffect(()=>{
  setsourse(skin)
},[skin])
const valid=()=>{
  setsourse(skin.filter(e=>e.name.toUpperCase().includes(p.current.value.toUpperCase())))
}
  return (
    <div className='App'>
      <div className='name'>
      <input className='gro' type={'text'}onChange={valid} ref={p}placeholder='chapions name'></input>
      </div>
    <Routes>
      <Route path='/' element={<><div className='group'>
        {sourse.map((e,index)=>
        
        <div className='cardS'>
        <NavLink to={index.toString()}>
       <h1 className='text'>
       {e.name}<h1></h1>
   
       </h1>
      
       <img src={e.imgsrc}></img></NavLink></div>)}</div>

      </>}></Route>
    
  
       </Routes>
  
       </div>
    
  )
}

export default Chapions