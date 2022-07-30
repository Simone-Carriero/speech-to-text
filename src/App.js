import React, {useState, useEffect} from 'react';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import {commandsEN, commandsES, commandsIT} from './commands'
import CommandsSet from './components/commands-set/commands-set.component';

import './App.css';
import LanguageSet from './components/language-set/language-set.component';

function App() {

  const [language, setLanguage] = useState('en-US')
  const [commands, setCommands] = useState(commandsEN)
  
  const {
    transcript,
    browserSupportsSpeechRecognition,
    listening,
    resetTranscript
  } = useSpeechRecognition({ commands })

  useEffect(() => {
    switch (language) {
      case 'en-US':
        setCommands(commandsEN)
        break;
      case 'es-MX':
        setCommands(commandsES)
        break;
      case 'it-IT':
        setCommands(commandsIT)
        break;
    
      default:
        break;
    }
  }, [language])
  

  
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }




  return (
    <>
      
      
      <div className={`container ${listening ? 'color-animation' : ''}`} id='container'>
        <LanguageSet setLanguage={setLanguage} />
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
          language={language}
        />
      </div>
    </>
  );
}

export default App;
