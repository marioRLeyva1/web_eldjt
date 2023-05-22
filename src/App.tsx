import React from 'react';
import './App.css';
import MobileHeader from './components/MobileHeader/MobileHeader';
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <div className='bg-light'>
      <HelmetProvider>
        <Helmet>
                  <meta charSet="utf-8" />
                  <title>Escuela Libre de Derecho y Jurisprudencia de Tabasco</title>
                  <meta name="description" content="Ser el mejor abodad@, inicia con la decisión correcta." />
        </Helmet>
      </HelmetProvider>
    </div>
  );
}

export default App;
