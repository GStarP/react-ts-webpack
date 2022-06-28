import React from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  // you can only use creatElement instead of JSX
  return React.createElement('h2', null, 'App')
}

const root = createRoot(document.getElementById('root'))

// also cannot use <App />
root.render(App())
