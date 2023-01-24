import React from "react";
import Option from "./Option";
import { nanoid } from 'nanoid'

const TriviaQuestion = React.forwardRef((props, ref) => {

  // console.log(props)

  function handleClick(option) {
      console.log(option)
      props.onAnswered(props.id, option)
   }

   function getClassName(option) {
    let className = "";
    className = props.answered ? "disable" : "enable";

    if(props.answered && option === props.correctAnswer) {
      className += " answer";  
    }
    if(props.answered && option == props.user_answer && option !== props.correctAnswer) {
      className += " wrong-answer";  
    }
    return className
  }


    const answers = []
    
    answers.push(...props.incorrectAnswers)
    const randomIndex = Math.floor(Math.random() * 4);
    answers.splice(randomIndex, 0, props.correctAnswer)

    let count = 1;
    const answerComponents = props.options.map(answer => 
    
    <Option key = {nanoid()} 
    name = {getClassName(answer)} onClick={handleClick} number ={count++} value={answer}/>)

  
  return (
    <div ref = {ref} className="question-block">
      <div className="question-holder">
      <p className="question-header">Question {props.question_no}</p>
      <p>{props.question}</p>
      </div>
      <div className="options-holder">
        {answerComponents}
      </div>
    </div>
  )
})

export default TriviaQuestion;