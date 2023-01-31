import React from 'react'
import { easeInOut, motion } from "framer-motion"

export default function ConfirmPage(props) {

  const upHandler = (event) => {
    event.preventDefault()
    if(event.key === 'Enter') {
      props.onStartQuiz()
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
    <motion.div  className='name-page' initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{duration:0.4, ease: easeInOut}}>
      <div className ="confirm-text">Okay, <p>{props.name} </p>let's see what you're made of...</div>
      <div className='button-wrapper'>
      <button className='start-button' onClick={props.onStartQuiz}>Give me all you've got </button>
      <div className='button-helper'>press <strong>Enter ↵</strong></div></div>
    </motion.div >
  )
}