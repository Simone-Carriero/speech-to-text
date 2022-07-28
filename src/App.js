import React from 'react';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import './App.css';
import CommandsSet from './components/commands-set.component';

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
      callback: (color) => {document.getElementById('container').style.background = color}
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




  return (
    <>
      
      
      <div className="container" id='container'>
        <div className="text-container">
          <h2>Please speak something to write</h2>
          <h3>Or give a voice command!</h3>
        </div>
        <div id="content" className='container__content'>
          {transcript}
        </div>
        <CommandsSet
          SpeechRecognition={SpeechRecognition}
          listening={listening}
          resetTranscript={resetTranscript}
        />
      </div>
    </>
  );
}

export default App;
