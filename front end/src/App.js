import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Routes, } from 'react-router-dom';
import Home from './components/Home';
import Chapions from './components/Chapions';
import SkinsCard from './components/SkinsCard'
import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';



function App() {
  const[skin,setskin]=useState(
    [{name:'garen',imgsrc:'https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt804eabffbf15dc51/5f4defe95acde4265bb2da77/Champion_garen_HP.png'},

    {name:'ashe',imgsrc:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a155f0b1-4492-4c2c-9f70-101cec027cb9/df4vccv-4afa4589-c128-4784-a348-5b4603baa8ad.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ExNTVmMGIxLTQ0OTItNGMyYy05ZjcwLTEwMWNlYzAyN2NiOVwvZGY0dmNjdi00YWZhNDU4OS1jMTI4LTQ3ODQtYTM0OC01YjQ2MDNiYWE4YWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nCm4Tc7zFNHpxUgaPOXDX1bvGJecHFE4Juw-1MZJQ5c'},
    
    
    {name:'ahri',imgsrc:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e632e5f3-ea51-4a14-a0fe-3478869513d3/df1uuy0-c17de065-4200-45eb-af48-316947adcfa0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U2MzJlNWYzLWVhNTEtNGExNC1hMGZlLTM0Nzg4Njk1MTNkM1wvZGYxdXV5MC1jMTdkZTA2NS00MjAwLTQ1ZWItYWY0OC0zMTY5NDdhZGNmYTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.A0qOoKbrLF8q1RTp-C7H9CyQ2otx7igzGqDbyIORtmw'},
    
    
    {name:'jayce',imgsrc:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e632e5f3-ea51-4a14-a0fe-3478869513d3/dflgf7m-5acff742-41e1-48a1-8516-848fdae47fec.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U2MzJlNWYzLWVhNTEtNGExNC1hMGZlLTM0Nzg4Njk1MTNkM1wvZGZsZ2Y3bS01YWNmZjc0Mi00MWUxLTQ4YTEtODUxNi04NDhmZGFlNDdmZWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6TtDNI0vbfXPCvVTbmwjwCg8bHmJoR685teY8fJ5YN0'},
    
    
    {name:'katarina',imgsrc:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e632e5f3-ea51-4a14-a0fe-3478869513d3/df3ip8u-34933009-caab-4ccd-9415-b75a71fb6291.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U2MzJlNWYzLWVhNTEtNGExNC1hMGZlLTM0Nzg4Njk1MTNkM1wvZGYzaXA4dS0zNDkzMzAwOS1jYWFiLTRjY2QtOTQxNS1iNzVhNzFmYjYyOTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JvqS6_OuMIC6LprYdk9D_vf2WJnrsz-q9JIRDxPXV_k'},
    
    
    {name:'kaisa',imgsrc:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f8b14c98-532f-4dec-b9cb-1ca190e9a337/df7u5p4-e0570503-6374-4600-961d-139e2474f371.png'}]
  )    
  return (
    <div className=".nav">
      <>
      <div className='name'>
      <NavLink to={"Home"}>Home</NavLink>
      <NavLink to={"Chapions"}>Chapions</NavLink>
      <NavLink to={"Login"}>Login</NavLink>
      <NavLink to={"Register"}>Register</NavLink>
   
     

      </div>


<Routes >
  <Route path='Home' element={<Home></Home>}></Route>
  <Route path='Chapions/' element={<Chapions skin={skin}></Chapions>}>

  </Route>
  <Route path='Login' element={<Login></Login>}></Route>
  <Route path='/Chapions/:id' element={<SkinsCard Skins={skin}></SkinsCard>}></Route>
  <Route path='Register'element={<Register></Register>}></Route>
  
 
</Routes>
      
      </>
    </div>
  );
}

export default App;
