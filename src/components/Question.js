import React from "react";

export default function Question(props) {

  
  function handleClick(option) {
     props.onAnswered(props.id, option)
  }
  
  function getClassName(option) {
    let className = "";
    className = props.answered ? "disable" : "enable";

    if(props.answered && option === props.answer) {
      className += " answer";  
    }
    if(props.answered && option == props.user_answer && option !== props.answer) {
      className += " wrong-answer";  
    }
    return className
  }

  return (
    <div className="question-block">
      <div className="question-holder">
      <p className="question-header">Question {props.question_no}</p>
      <p>{props.question}</p>
      </div>
      <label className = {getClassName("a")}  onClick={() => handleClick("a")}><input type="radio" id="option_a" name = {props.id} value="option_a"/>{props.option_a}</label>
      <label className = {getClassName("b")}onClick={() => handleClick("b")}><input type="radio" id="option_b" name = {props.id} value="option_b"/>{props.option_b}</label>
      <label className = {getClassName("c")} onClick={() => handleClick("c")}><input  type="radio" id="option_c" name ={props.id} value="option_c"/>{props.option_c}</label>
      <label className = {getClassName("d")}  onClick={() => handleClick("d")}><input type="radio" id="option_d" name ={props.id} value="option_d"/>{props.option_d}</label>

    </div>
  )
}