import { MakeLogin } from '@/main/factories/pages/login/login-factory'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<MakeLogin />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router
