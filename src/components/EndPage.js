import React from 'react'

import WinnerPage from './WinnerPage'
import LoserPage from './LoserPage'
import PassPage from './PassPage'

export default function EndPage(props) {
  let validAnswers = props.answers.filter(ans => ans.answer === ans.correctAnswer).length;
  let winner = validAnswers >= 10;
  let pass = validAnswers >= 7 && validAnswers <10;
  let loser = validAnswers <7;
  

  return (
    <div>
      {winner && <WinnerPage name = {props.name} correctAnswers = {validAnswers} />}
      {pass && <PassPage  name = {props.name} correctAnswers = {validAnswers} />}
      {loser && <LoserPage  name = {props.name} correctAnswers = {validAnswers} />}
    </div>
  )
}