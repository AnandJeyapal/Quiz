import React from 'react'

import winner from '../images/pass.gif'

export default function PassPage(props) {
 
  return (
    <div className='name-page al-c'>
      <img className='end-image' src={winner} />
      <div className="end-text">
        <label>Pretty good, </label>
        <label className='bold'>{props.name}</label> ,
        <label> that's </label>
        <label className='bold'>{props.correctAnswers}</label>
        <label>/12 answers right!
        You're welcome at our quiz table any day...</label></div>
    </div>
  )
}
