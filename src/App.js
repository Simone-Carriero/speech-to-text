import React from 'react';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import './App.css';

function App() {
  const commands = [
    {
      command: ['reset', 'clear'],
      callback: ({ resetTranscript }) => resetTranscript()
    },
    {
      command: ['open *', 'go to *'],
      callback: (site) => { window.open(`https://${site}`)}
    },
    {
      command: 'clear',
      callback: ({ resetTranscript }) => resetTranscript()
    },
    {
      command: 'increase text size',
      callback: () => {document.getElementById('content').style.fontSize = '22px'}
    },
    {
      command: 'decrease text size',
      callback: () => {document.getElementById('content').style.fontSize = '16px'}
    },
    {
      command: 'change text colour to *',
      callback: (color) => {document.getElementById('content').style.color = color}
    },
    {
      command: 'change background colour to *',
      callback: (color) => {document.getElementById('container').style.backgroundColor = color}
    },
  ]

  
  const {
    transcript,
    browserSupportsSpeechRecognition,
    listening,
    resetTranscript
  } = useSpeechRecognition({ commands })
  

  
  if (!browserSupportsSpeechRecognition) {
    return null
  }

  const start = () => {
    SpeechRecognition.startListening({continuous: true, language: 'en-US' })
}


  return (
    <>
      
      
      <div className="container" id='container'>
        <h2>PLEASE SPEAK SOMETHING TO WRITE</h2>
        <div id="content" className='container__content'>
          {transcript}
        </div>
          <div>
          <p>Microphone: {listening ? 'on' : 'off'}</p>
          <button onClick={start}>Start</button>
          <button onClick={SpeechRecognition.stopListening}>Stop</button>
          <button onClick={resetTranscript}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
