import React from "react";
import { nanoid } from 'nanoid'
import TriviaOption from "./TriviaOption";


export default function TriviaQuestionPage(props)  {

  // console.log(props)

  const nextButtonRef = React.useRef(null)

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

  
  function handleNextClick() {
     if(!props.answered) {
       nextButtonRef.current.classList.add("button-shake")
     } else {
      nextButtonRef.current.classList.remove("button-shake")
      props.handleNextClick()
     }
  }

  return (
    <div className="trivia-question-block">
      
      <div className="trivia-question-holder">
      <p>{props.question_no + ". " +props.question}</p>
      </div>
      <div className="trivia-options-holder">
        {answerComponents}
      </div>
      <button ref = {nextButtonRef} onClick = {handleNextClick}  onAnimationEnd={() => nextButtonRef.current.classList.remove("button-shake")} className='start-button al-l mt-1'>Next</button>
    </div>
  )
}