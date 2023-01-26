import React from 'react'

import winner from '../images/loser.gif'

export default function LoserPage(props) {
 
  return (
    <div className='name-page al-c'>
      <img className='end-image' src={winner} />
      <div className="end-text">
        <label>You got </label>
        <label className='bold'>{props.correctAnswers}</label>
        <label>/12 answers right! </label>
        <label className='bold'>{props.name}</label> 
        <label> On the plus side, that probably means 
          you don't spend too much time learning obscure facts just so you can be good at trivia quizzes</label></div>
      <button className='start-button'>Again</button>
    </div>
  )
}


