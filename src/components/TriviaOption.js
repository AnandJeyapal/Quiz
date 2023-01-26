import React from "react";
import { FaCheck } from "react-icons/fa"
export default function TriviaOption(props) {
  return(
    <div  className={"trivia-option-block "+ props.name} onClick={() => props.onClick(props.value)}>
      <div className="trivia-option-number">
          <span>{props.number}</span>
      </div>
      <div className="trivia-option-value">
          <span className="fg-1">{props.value}</span>
          {props.name.endsWith("selected") && <FaCheck/>}
      </div>
      
    </div>
  )
}