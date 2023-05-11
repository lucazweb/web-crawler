import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './global.scss'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(<App />)
