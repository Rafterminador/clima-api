import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='px-4 md:px-20 py-4'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:id' element={<Content />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
