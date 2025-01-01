import React from 'react'
import { Routes, Route } from 'react-router-dom';
import RootLayout from './_root/RootLayout.jsx';
import BackSoonPage from './BackSoonPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import CommitteePage from './pages/CommitteePage.jsx';
import WebsiteTeamPage from './pages/WebsiteTeamPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import HomePage from './pages/HomePage.jsx';
import VerificationPage from './pages/VerificationPage';

const App = () => {
  return (
    <main className='min-h-screen'>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/core-committee' element={<CommitteePage />} />
          <Route path='/website-team' element={<WebsiteTeamPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/verification' element={<VerificationPage />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
