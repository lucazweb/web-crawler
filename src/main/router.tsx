import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import {
  SearchPage,
  QueryHistory,
  QuerySearchDetail,
} from '@/presentation/pages'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<SearchPage />} />
        <Route path="/historico" index element={<QueryHistory />} />
        <Route path="/query-detail/:id" index element={<QuerySearchDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
