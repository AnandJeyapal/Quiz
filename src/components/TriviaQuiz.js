import React from 'react'

import FrontPage from './FrontPage'
import QuizPage from './QuizPage';

export default function TriviaQuiz() {

  const [quizState, setQuizState] = React.useState({firstTime : true, name: "", quizStarted: false, questions: []});

  const[questions, setQuestions] = React.useState([])

  const[userAnswers, setUserAnswers] = React.useState([])

  React.useEffect(() => {
    fetch(`https://the-trivia-api.com/api/questions?limit=12&categories=science,history`)
      .then((response) => response.json())
      .then((actualData) => convert((actualData)));
  }, []);

  React.useEffect(() => {
    setQuizState(prev => ({...prev, questions: questions, current_question: 1}))
  }, [questions]);

  React.useEffect(() => {
    const answers = questions.map((question, index) => ({question_number: index+1, answered: false, answer: "", 
    correctAnswer: question.correctAnswer}))
    setUserAnswers(answers)
  }, [questions]);

  function convert(actualData) {
    const convertedQuestions = actualData.map(d => ({...d, options: getOptions(d)}));
    setQuestions(convertedQuestions)
  }

  function getOptions(data) {
    const answers = []
    answers.push(...data.incorrectAnswers)
    const randomIndex = Math.floor(Math.random() * 4);
    answers.splice(randomIndex, 0, data.correctAnswer)
    return answers
  }

  function start() {
    setQuizState(prev => ({...prev, firstTime: false}));
  }

  function startQuiz() {
    setQuizState(prev => ({...prev, quizStarted: true}));
  }

  function collectName(enteredName) {
    setQuizState(prev => ({...prev, name: enteredName}));
  }
  
  function onAnswered(question_no, user_answer) {
    setUserAnswers(prev => prev.map((prevAnswer, index) => 
    index + 1 == question_no ? {...prevAnswer, answered: true, answer:user_answer} : prevAnswer))
  }

  function showNextQuestion(currentQuestion) {
    
    if(currentQuestion-1 < questions.length) {
      currentQuestion++;
      setQuizState(prev => ({...prev, quizStarted: true, current_question: currentQuestion}));
    }
  }

  return (
    <div className='holder'>
     {quizState.firstTime && <FrontPage startQuiz ={start}/>}
     {!quizState.firstTime && <QuizPage name = {quizState.name} 
            onNameEntered ={collectName} 
            onStartQuiz ={startQuiz} 
            questions = {questions}
            answers = {userAnswers}
            currentQuestion = {quizState.current_question}
            showNextQuestion = {showNextQuestion}
            handleOptionClick = {onAnswered}
            quizStarted = {quizState.quizStarted}/>}
    </div>
  )
}