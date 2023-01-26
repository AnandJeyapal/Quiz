import React from 'react'

export default function NamePage(props) {

  const [name, setName] = React.useState("");

  function onNameEntered() {
      props.onNameEntered(name)
  }

  return (
    <div className='name-page'>
      <h1 className='primary pt-1' >What's your name, challenger?*</h1>
      <p className='secondary mt-0'>Just your first one is fine. Or a nickname.</p>
      <input onChange ={(e) => setName(e.target.value)} className = 'input-name' type='text' placeholder='Your Name' value = {name}/>
      <button className='start-button' onClick={onNameEntered}>OK</button>
    </div>
  )
}