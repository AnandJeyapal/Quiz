import React from "react";
import { nanoid } from 'nanoid'
import TriviaOption from "./TriviaOption";
import { easeInOut, motion, useAnimationControls } from "framer-motion"


export default function TriviaQuestionPage(props)  {

  const controls = useAnimationControls();

  const nextButtonRef = React.useRef(null)

  const parentRef = React.useRef(null)

  React.useEffect(() => {
    if(props.user_answer === "") {
      controls.start({
        opacity: 1,
        transition: { duration: 0.4 }
      })
    } else {
      parentRef.current.style.opacity = 1
    }}, [])



  function handleClick(option) {
      props.handleOptionClick(props.question_no, option)
   }

   function getClassName(option) {
    let className = "";

    if(option === props.user_answer) {
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
     if(props.user_answer === "") {
       nextButtonRef.current.classList.add("button-shake")
     } else {
      nextButtonRef.current.classList.remove("button-shake")
      props.handleNextClick()
     }
  }

  return (
    <motion.div ref = {parentRef} initial ={{opacity: 0}} animate={controls} className="trivia-question-block">
      
      <div className="trivia-question-holder">
      <p>{props.question_no + ". " +props.question}</p>
      </div>
      <div className="trivia-options-holder">
        {answerComponents}
      </div>
      <button ref = {nextButtonRef} onClick = {handleNextClick}  onAnimationEnd={() => nextButtonRef.current.classList.remove("button-shake")} className='start-button al-l mt-1'>Next</button>
    </motion.div>
  )
}