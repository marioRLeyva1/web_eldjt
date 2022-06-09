import React from 'react'
import MobileHeader from '../../components/MobileHeader/MobileHeader'
import ELDJTPNG from '../../icons/eldjt-png.png'
import Library from '../../icons/library.png'
import Students from '../../icons/students.jpg'

const Home = () => {
  return (
    <React.Fragment>
        <div className='sm:hidden'>
            <MobileHeader/>
        </div>
        <div className='flex flex-col'>
            {/* <img src={ELDJTPNG} alt="eldjt" className='fixed h-96 w-full object-contain'/> */}
            <h1 className='fixed h-96 w-full text-light text-4xl flex flex-col items-center justify-center'>
                <span>Inscripciones</span>
                <span>abiertas</span>
                <button>Hola</button>
            </h1>
            {/* <button className='absolute top-96 mt-7 w-32 border-light border-2 rounded-md text-light'>MÁS INFORMACIÓN</button> */}
            <img src={Library} alt="library" className='h-96 -z-20'/>
        </div>
        <div className='flex flex-col bg-dark h-96'>
            <h2 className='flex flex-col items-center text-3xl text-light'>
                <span>Oferta</span>
                <span>Académica</span>
            </h2>
        </div>
    </React.Fragment>
  )
}

export default Home