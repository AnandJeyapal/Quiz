import React from "react";

export default function Option(props) {
  return(
    <div onClick={() => props.onClick(props.value)} className={"option-block "+ props.name}>
      <label className="option-number">{props.number}</label>
      <label className= "option-description">{props.value}</label>
    </div>
  )
}