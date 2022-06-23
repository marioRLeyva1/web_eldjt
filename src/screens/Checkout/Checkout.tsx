import React from 'react'
import Footer from '../../components/Footer/Footer'

const Checkkout = () => {
  return (
    <div className='min-h-screen'>
      <header className='h-20 bg-slate-50 shadow-lg rounded-b-lg flex items-center justify-center'>
        <img src="https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Feldjt.png?alt=media&token=e384ed2e-d88d-4e02-a863-8adb15f772bb" alt="" className='w-60' />
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