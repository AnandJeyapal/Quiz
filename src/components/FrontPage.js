import React from 'react'

import FrameImage from '../images/first-frame.png'

export default function FrontPage(props) {
  return (
    
    <div className='front-page'>
      <img className='first-frame' src ={FrameImage}/>
      <div className='frame-text-holder'>
      <h1 className='primary pt-1' >If you get a high score, you probably 
      spend way too much time on Wikipedia.</h1>
      <p className='secondary mt-0'>There are 12 questions and a break for refreshments in the middle.
(You'll have to provide your own snacks, sorry.)</p>
<div className='button-holder'>
  <button className='start-button' onClick={props.startQuiz}>Let's get started</button>
  </div>
</div>
    </div>
  )
}