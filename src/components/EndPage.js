import React from 'react'

import WinnerPage from './WinnerPage'
import LoserPage from './LoserPage'
import PassPage from './PassPage'

import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default function EndPage(props) {
  const { width, height } = useWindowSize()

  let validAnswers = props.answers.filter(ans => ans.answer === ans.correctAnswer).length;
  let winner = validAnswers >= 10;
  let pass = validAnswers >= 7 && validAnswers <10;
  let loser = validAnswers <7;
  

  return (
    <div>
      <Confetti
      width={width}
      height={height}
      />
      {winner && <WinnerPage name = {props.name} correctAnswers = {validAnswers} restartQuiz = {props.restartQuiz}/>}
      {pass && <PassPage  name = {props.name} correctAnswers = {validAnswers} restartQuiz = {props.restartQuiz}/>}
      {loser && <LoserPage  name = {props.name} correctAnswers = {validAnswers} restartQuiz = {props.restartQuiz}/>}
    </div>
  )
}