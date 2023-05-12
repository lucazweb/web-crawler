import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<h1>Webcrawler</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
