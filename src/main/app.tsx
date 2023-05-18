import React from 'react'
import Router from './router'
import { ReduxProvider } from '@/infra/redux'
import '@/presentation/styles/fonts.css'

export default function App() {
  return (
    <ReduxProvider>
      <Router />
    </ReduxProvider>
  )
}
