import React from 'react'

const Footer = () => {


  return (
    <footer className='bg-primary w-full font-poppins'>
      <h3 className='text-white p-4 text-sm text-center'>© {new Date().getFullYear()}. Escuela Libre de Derecho y Jurisprudencia de Tabasco. Todos los derechos reservados.</h3>
    </footer>
  )
}

export default Footer