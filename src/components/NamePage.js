import React from 'react'
import { easeInOut, motion } from "framer-motion"

export default function NamePage(props) {

  const [name, setName] = React.useState("");

  function onNameEntered() {
      props.onNameEntered(name)
  }

  return (
    <motion.div  className='name-page' initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{duration:0.4, ease: easeInOut}}>
      <h1 className='primary pt-1' >What's your name, challenger?*</h1>
      <p className='secondary mt-0'>Just your first one is fine. Or a nickname.</p>
      <input spellCheck = "false" onChange ={(e) => setName(e.target.value)} className = 'input-name' type='text' placeholder='Your Name' value = {name}/>
      <button className='start-button' onClick={onNameEntered}>OK</button>
    </motion.div >
  )
}