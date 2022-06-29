import { createRoot } from 'react-dom/client'
// cannot use JSX directly in .ts file, but can import JSX
import App from './App'

const el = document.getElementById('root')

const root = createRoot(el || document.body.appendChild(document.createElement('div')))

// also cannot use <App />
root.render(App('Hello'))
