import React from "react";
import { nanoid } from 'nanoid'
import QuestionData from '../data';
import Question from "./Question";
import TriviaQuestion from "./TriviaQuestion";
import data from "../data";
import Answer from "./Answer";

export default function Main(props) {
  
  
  const[questions, setQuestions] = React.useState([])
  const[answeredQuestions, setAnsweredQuestions] = React.useState([])

  const questionRefs = React.useRef([])

  React.useEffect(() => {
    fetch(`https://the-trivia-api.com/api/questions?limit=20&categories=science,history`)
      .then((response) => response.json())
      .then((actualData) => convert((actualData)));
  }, []);

  React.useEffect(() => {
    let i=1;
    const answered = questions.
    map(function(q) {
      return {
         number: i++,
         answered: q.answered ? q.answered : false,
         correct: (q.correctAnswer === q.user_answer)
      }
    })
    setAnsweredQuestions(answered)
  }, [questions]);

  function convert(actualData) {
    const convertedQuestions = actualData.map(d => ({...d, options: getOptions(d)}));
    setQuestions(convertedQuestions)
    console.log(convertedQuestions)
  }

  function getOptions(data) {
    const answers = []
    answers.push(...data.incorrectAnswers)
    const randomIndex = Math.floor(Math.random() * 4);
    answers.splice(randomIndex, 0, data.correctAnswer)
    return answers
  }
  
  function handleOptionClick(id, option) {
     setQuestions(prevQuestions => prevQuestions.map(prevQuestion => 
      prevQuestion.id == id ? {...prevQuestion, answered: true, user_answer: option} : 
      prevQuestion))
  }

  function handleAnswerClick(number) {
    console.log(number)
    questionRefs.current[number-1].scrollIntoView({behavior: 'smooth'})
  }
  
  const questionComponents =  questions.map((question, index) => 
    <TriviaQuestion ref={element => questionRefs.current[index] = element} key ={nanoid()} onAnswered = {handleOptionClick} question_no = {index+1} {...question}/>)
  

  // <div>
  //   {inputArray.map((item, index) => (
  //     <div key={index}>
  //       <h3>Question No: {item}</h3>
  //       <button onClick={() => onPressStart(index)}>Start Questionair</button>
  //       <input ref={element => inputRef.current[index] = element} type="text" />
  //     </div>
  //   ))}
  // </div>
  const answerComponents = answeredQuestions.map((item, index) => <Answer onAnswerClick = {handleAnswerClick} {...item}/>)
  

  
  return(
    <main>
      <div className="questions-holder">
      {questionComponents}
      </div>
    
    <div className="answer-holder">
      {answerComponents}
    </div>
    </main>
  )   
}