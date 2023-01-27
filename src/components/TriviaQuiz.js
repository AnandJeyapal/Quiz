import React from 'react'

import FrontPage from './FrontPage'
import QuizPage from './QuizPage';

export default function TriviaQuiz() {

  const [quizState, setQuizState] = React.useState({firstTime : true, name: "", 
  quizStarted: false, questions: [], user_answers: [],
  hasError: false, allAnswered: false});

  React.useEffect(() => {
    fetch(`https://the-trivia-api.com/api/questions?limit=12&categories=science,history`)
      .then((response) => response.json())
      .then((actualData) => updateQuestions((actualData)));
  }, []);

 function updateQuestions(actualData) {
    const convertedQuestions = actualData.map(d => ({...d, options: getOptions(d)}));
    setQuizState(prev => ({...prev, questions: convertedQuestions, current_question: 1, user_answers: createAnswers(convertedQuestions)}))
  }

  function createAnswers(questions) {
    return  questions.map((question, index) => ({question_number: index+1, answered: false, answer: "", 
    correctAnswer: question.correctAnswer}))
  }

  function getOptions(data) {
    const answers = []
    answers.push(...data.incorrectAnswers)
    const randomIndex = Math.floor(Math.random() * 4);
    answers.splice(randomIndex, 0, data.correctAnswer)
    return answers
  }

  function restart() {
    setQuizState(prev => ({...prev, allAnswered: false, user_answers: createAnswers(prev.questions), current_question: 1}));
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
    setQuizState(prevState => ({...prevState, user_answers: updateAnswers(prevState.user_answers, question_no, user_answer)}))
  }

  function updateAnswers(existingAnswers, question_no, user_answer) {
    return existingAnswers.map((prevAnswer, index) => 
    index + 1 == question_no ? {...prevAnswer, answered: true, answer:user_answer} : prevAnswer)
  }

  function showNextQuestion(currentQuestion) {
    console.log(currentQuestion)
    console.log(quizState)
    if(!quizState.user_answers[currentQuestion-1].answered) {
       setQuizState(prev => ({...prev, hasError: true}));
    } else if(currentQuestion == 12) {
      setQuizState(prev => ({...prev, allAnswered: true}));
    } else if(currentQuestion-1 < quizState.questions.length) {
      currentQuestion++;
      setQuizState(prev => ({...prev, current_question: currentQuestion}));
    }
  }

  return (
    <div className='holder'>
     {quizState.firstTime && <FrontPage startQuiz ={start}/>}
     {!quizState.firstTime && <QuizPage name = {quizState.name} 
            onNameEntered ={collectName} 
            onStartQuiz ={startQuiz} 
            questions = {quizState.questions}
            answers = {quizState.user_answers}
            currentQuestion = {quizState.current_question}
            showNextQuestion = {showNextQuestion}
            handleOptionClick = {onAnswered}
            allAnswered = {quizState.allAnswered}
            quizStarted = {quizState.quizStarted}
            restartQuiz = {restart}/>}
    </div>
  )
}