import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
function App() {
  return (
    <div className='px-4 md:px-20 py-4'>
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
