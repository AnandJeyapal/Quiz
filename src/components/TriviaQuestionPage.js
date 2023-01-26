import React from "react";
import { nanoid } from 'nanoid'
import TriviaOption from "./TriviaOption";


export default function TriviaQuestionPage(props)  {

  // console.log(props)

  function handleClick(option) {
      props.handleOptionClick(props.question_no, option)
   }

   function getClassName(option) {
    let className = "";

    if(props.answered && option === props.user_answer) {
      className += " selected";  
    }
    
    return className
  }


    const answers = []
    
    answers.push(...props.incorrectAnswers)
    const randomIndex = Math.floor(Math.random() * 4);
    answers.splice(randomIndex, 0, props.correctAnswer)

    let count = 1;
    const answerComponents = props.options.map(answer => 
    
    <TriviaOption key = {nanoid()} 
    name = {getClassName(answer)} onClick={handleClick} number ={count++} value={answer}/>)

  
  return (
    <div className="trivia-question-block">
      
      <div className="trivia-question-holder">
      <p>{props.question_no + ". " +props.question}</p>
      </div>
      <div className="trivia-options-holder">
        {answerComponents}
      </div>
      <button onClick = {props.handleNextClick} className='start-button al-l mt-1'>Next</button>
    </div>
  )
}