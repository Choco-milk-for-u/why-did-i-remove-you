import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { twitterRootContainer } from './assets/static/main.ts'

createRoot(document.getElementById(twitterRootContainer)!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
