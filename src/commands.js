export const commandsEN = [
  {
    command: ['reset', 'clear'],
    callback: ({ resetTranscript }) => resetTranscript()
  },
  {
    command: 'increase text size',
    callback: () => document.getElementById('content').style.fontSize = '22px'
  },
  {
    command: 'decrease text size',
    callback: () => document.getElementById('content').style.fontSize = '16px'
  },
  {
    command: 'change text colour to *',
    callback: (color) => document.getElementById('content').style.color = color
  },
  {
    command: 'change background colour to *',
    callback: (color) => { 
      document.getElementById('container').classList.remove('color-animation')
      document.getElementById('container').style.backgroundColor = color
    }
  }
]


export const commandsES = [
  {
    command: ['limpia', 'borra'],
    callback: ({ resetTranscript }) => resetTranscript()
  },
  {
    command: 'recarga',
    callback: () => window.location.reload()
  },
  {
    command: 'aumenta tamaño texto',
    callback: () => document.getElementById('content').style.fontSize = '22px'
  },
  {
    command: 'reduce tamaño texto',
    callback: () => document.getElementById('content').style.fontSize = '16px'
  }
]


export const commandsIT = [
  {
    command: ['cancella', 'elimina'],
    callback: ({ resetTranscript }) => resetTranscript()
  },
  {
    command: 'ricarica',
    callback: () => window.location.reload()
  },
  {
    command: 'aumenta dimensioni testo',
    callback: () => document.getElementById('content').style.fontSize = '22px'
  },
  {
    command: 'diminuisci dimensioni testo',
    callback: () => document.getElementById('content').style.fontSize = '16px'
  }
]

