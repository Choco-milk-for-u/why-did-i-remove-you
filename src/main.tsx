import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { twitterRootContainer } from './assets/static/main.ts'

const appRoot = document.createElement('div');
appRoot.id = 'extension-react-root';
document.getElementById(twitterRootContainer)!.parentElement!.appendChild(appRoot)

createRoot(appRoot).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
