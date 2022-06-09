import React from 'react';
import './App.css';
import MobileHeader from './components/MobileHeader/MobileHeader';
import SliderMobile from './components/SliderMobile/SliderMobile';

function App() {
  return (
    <div className='bg-light'>
      <div id='mobile' className='sm:hidden'>
        <MobileHeader/>
      </div>
      {/* <SliderMobile/> */}
      <div className='h-44'>
        <h2>Ofeta Académica</h2>
      </div>
      <h2>¿Por qué elegirnos?</h2>
      <h2>Noticias</h2>
      <h2>Contacto (Form)</h2>

    </div>
  );
}

export default App;
