import React from 'react';
import './App.css';
import MobileHeader from './components/MobileHeader/MobileHeader';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className='bg-light'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Escuela Libre de Derecho y Jurisprudencia de Tabasco</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
                <meta name="description" content="Ser el mejor abodad@, inicia con la decisión correcta." />
      </Helmet>
    </div>
  );
}

export default App;
