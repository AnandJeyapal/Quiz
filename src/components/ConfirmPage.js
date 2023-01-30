import React from 'react'
import { easeInOut, motion } from "framer-motion"

export default function ConfirmPage(props) {

  return (
    <motion.div  className='name-page' initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{duration:0.4, ease: easeInOut}}>
      <div className ="confirm-text">Okay, <p>{props.name} </p>let's see what you're made of...</div>
      <button className='start-button' onClick={props.onStartQuiz}>Give me all you've got </button>
    </motion.div >
  )
}