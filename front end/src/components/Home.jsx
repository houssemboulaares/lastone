import React from 'react'
import lol from './images/lol.png'
function Home() {

  return (
  <div className='homeimg'>
    <img className='imgss' src={lol}></img>
<h2 className='tees'>Welcome To</h2>
<h1 className='toos'>Summoner's Rift</h1>
  <p className='tpp'>League of Legends (LoL) is a popular multiplayer online battle arena (MOBA) game developed and published by Riot Games.<br></br> In the game, players control a champion with unique abilities and battle against a team of enemy champions, with the ultimate goal of destroying the enemy team's base.<br></br> Matches can last anywhere from 20 minutes to over an hour and require strategy, teamwork, and quick reflexes to succeed.<br></br> LoL features a wide variety of champions to choose from, each with their own strengths and weaknesses.</p>

 
  

<div>
  <button className='btn' >PLAY NOW</button>
  <button className='btn'>GET STARTED</button>
  </div>
  </div>
  )
}

export default Home