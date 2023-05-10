import React from 'react'
import { createRoot } from 'react-dom/client'
import './global.scss'

const App = () => <span>Hello crawler</span>

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(<App />)
