import React from 'react'
import Footer from '../../components/Footer/Footer'

const Checkkout = () => {
  return (
    <div className='min-h-screen'>
      <header className='h-20 bg-slate-50 shadow-lg rounded-b-lg'>
        <img src="https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Feldjt-png.png?alt=media&token=a31fec81-e6e8-42af-a263-735b9c7cb4cb" alt="" />
      </header>
      <section>
        Payment Section
      </section>
      <div className='absolute bottom-0 w-full'>
        <Footer/>
      </div>
    </div>
  )
}

export default Checkkout