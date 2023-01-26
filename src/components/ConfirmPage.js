import React from 'react'

export default function ConfirmPage(props) {

  return (
    <div className='name-page'>
      <div className ="confirm-text">Okay, <p>{props.name} </p>let's see what you're made of...</div>
      <button className='start-button' onClick={props.onStartQuiz}>Give me all you've got</button>
    </div>
  )
}