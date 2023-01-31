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
  
  const upHandler = (event) => {
    event.preventDefault()
    if(event.key === 'Enter') {
      props.restartQuiz()
    }
  };

  // Add event listeners
  React.useEffect(() => {
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keyup", upHandler);
    };
  }, []);


  return (
    <div>
      <Confetti
      width={width}
      height={height}
      />
      <div className='end-page al-c'>
        {winner && <WinnerPage name = {props.name} correctAnswers = {validAnswers}/>}
        {pass && <PassPage  name = {props.name} correctAnswers = {validAnswers}/>}
        {loser && <LoserPage  name = {props.name} correctAnswers = {validAnswers}/>}
        <div className='button-wrapper'>
        <button className='start-button' onClick={props.restartQuiz}>Again</button>
        <div className='button-helper'>press <strong>Enter ↵</strong></div>
      </div>
      </div>
    </div>
  )
}