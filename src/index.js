import React from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return<h2>App</h2>
}

const root = createRoot(document.getElementById('root'))

root.render(<App />)
