import React from 'react'
import { Routes, Route } from 'react-router-dom';
import RootLayout from './_root/RootLayout.jsx';
import BackSoonPage from './BackSoonPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import CoreCommitteePage from './pages/CommitteePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';

const App = () => {
  return (
    <main className='min-h-screen'>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<BackSoonPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/core-committee' element={<CoreCommitteePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
