import React from 'react'

export default function Answer(props) {
  console.log(props)

  function getClassName() {
    let name = "answer-block"
    if(props.answered === false) {
      name += " not-answered"
    } else {
      name += props.correct === false ? " wrong" : " right"
    }
    return name
  }

   return (
    <div onClick ={() => props.onAnswerClick(props.number)} className={getClassName()}>
      <label>{props.number}</label>
    </div>
   )
}