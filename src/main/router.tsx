import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { SearchPage, QueryHistory } from '@/presentation/pages'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<SearchPage />} />
        <Route path="/historico" index element={<QueryHistory />} />
      </Routes>
    </BrowserRouter>
  )
}
