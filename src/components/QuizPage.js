import React from 'react'
import ConfirmPage from './ConfirmPage'
import NamePage from './NamePage'
import {nanoid} from 'nanoid'
import TriviaQuestionPage from './TriviaQuestionPage'
import EndPage from './EndPage'

export default function QuizPage(props) {
  const currentQuestionIndex = props.currentQuestion - 1;
  let questionComponent;
  if(currentQuestionIndex < props.questions.length) {
    const currentQuestionData = props.questions[currentQuestionIndex];
    const answerData = props.answers[currentQuestionIndex];
    questionComponent = <TriviaQuestionPage key ={nanoid()} 
    handleNextClick = {() => props.showNextQuestion(props.currentQuestion)}
    handleOptionClick = {props.handleOptionClick}
    user_answer = {answerData.answer}
    question_no = {currentQuestionIndex+1} {...currentQuestionData}/>
  }

  
  return (
    <div className = "trivia-quiz-page">
      {props.name === "" && <NamePage onNameEntered = {props.onNameEntered}/>}
      {props.name !== "" && !props.quizStarted && <ConfirmPage name = {props.name} onStartQuiz ={props.onStartQuiz}/>}
      {props.quizStarted && !props.allAnswered && questionComponent}
      {props.allAnswered && <EndPage name = {props.name} answers = {props.answers} restartQuiz = {props.restartQuiz}/>}
    </div  > 
  )
}