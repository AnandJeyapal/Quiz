import React from 'react'

import winner from '../images/winner.gif'

export default function WinnerPage(props) {
 
  return (
    <div className='name-page al-c'>
      <img className='end-image' src={winner} />
      <div className="end-text">
        <label>Nice, </label>
        <label className='bold'>{props.name}</label> ,
        <label> that's </label>
        <label className='bold'>{props.correctAnswers}</label>
        <label>/12 answers right!
          Your prize is the knowledge that you probably know the most obscure facts out of anyone in the room.
          Especially if you're alone. Then you definitely do.</label></div>
      <button className='start-button' onClick = {props.restartQuiz}>Again</button>
    </div>
  )
}