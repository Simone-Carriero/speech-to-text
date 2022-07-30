import React from 'react'
import './commands-set.styles.css'

const CommandsSet = ({ SpeechRecognition, listening, resetTranscript, language }) => {

  const start = () => {
    
    SpeechRecognition.startListening({ continuous: true, language: language })
    
  }

  return (
    <div className='command-container'>
      <p>Microphone: <span className={listening ? 'green' : 'red'}>{listening ? 'ON' : 'OFF'}</span></p>
      <div className="buttons-container">
        <button onClick={start}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
      </div>
    </div>
  )
}

export default CommandsSet