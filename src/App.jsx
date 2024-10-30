import React from 'react'
import { Routes, Route } from 'react-router-dom';
import RootLayout from './_root/RootLayout.jsx';
import BackSoonPage from './BackSoonPage.jsx';

const App = () => {
  return (
    <main className='min-h-screen'>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<BackSoonPage />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
