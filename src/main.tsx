import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { Modal } from 'react-bootstrap'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
