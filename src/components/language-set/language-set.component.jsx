import React from 'react'

import us from '../../assets/icons/US.png'
import mx from '../../assets/icons/MX.png'
import it from '../../assets/icons/IT.png'

import './language-set.styles.css'

const LanguageSet = ({ setLanguage }) => {

  return (
    <div className="language-set-container">
      <img src={it} alt="" onClick={() => setLanguage('it-IT')} />
      <img src={mx} alt="" onClick={() => setLanguage('es-MX')} />
      <img src={us} alt="" onClick={() => setLanguage('en-US')} />
    </div>
  )
}

export default LanguageSet