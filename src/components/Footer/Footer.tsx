import React from 'react'
import Input from '../Input/Input'

const Footer = () => {


  return (
    <footer className='w-full font-poppins'>
          <div className='sm:flex sm:justify-center items-center bg-primary'>
            <h3 className='text-2xl text-center text-white mb-2 pt-4 sm:hidden'>📍 Encuéntranos</h3>
            <div className='flex items-center sm:justify-center p-4 sm:p-1 w-full sm:w-auto sm:mb-0'>
             <iframe className='shadow border rounded' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15179.601881666835!2d-92.9335437!3d17.983367!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x68de260b6df9f227!2sEscuela%20Libre%20de%20Derecho%20y%20Jurisprudencia%20de%20Tabasco!5e0!3m2!1ses-419!2smx!4v1655332013040!5m2!1ses-419!2smx" width="400" height="300"  loading="lazy"></iframe>
            </div>
            <div className='flex flex-col gap-4 mt-5 sm:w-96'>
                <h3 className='text-2xl text-center text-white'>Contáctanos</h3>
                <Input type='text' placeholder={'Nombre Completo'} required={true}/>
                <Input type='email' placeholder={'Correo Electrónico'} required={true}/>
                <Input type='tel' placeholder={'Teléfono'} required={true}/>
                <Input type='text' placeholder={'Ciudad'} required={true}/>
                <button className='mx-5 mb-5 border-LG p-2 bg-secondary rounded text-white font-bold drop-shadow' onClick={() => console.log('efef')}>
                  <span>ENVIAR</span>
                  <span className='ml-2'>✉️</span>
                </button>
            </div>
          </div>
      <h3 className='text-white p-4 text-sm text-center bg-secondary'>© {new Date().getFullYear()}. Escuela Libre de Derecho y Jurisprudencia de Tabasco. Todos los derechos reservados.</h3>
    </footer>
  )
}

export default Footer