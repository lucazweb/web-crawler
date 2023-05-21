import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import { GlobalStyle } from '@/presentation/styles/global'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <>
    <GlobalStyle />
    <App />
  </>
)
