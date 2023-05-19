import React from 'react'
import Router from './router'
import { ReduxProvider } from '@/infra/redux'
import { ThemeProvider } from '@/presentation/styles/theme'
import '@/presentation/styles/fonts.css'

export default function App() {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </ReduxProvider>
  )
}
