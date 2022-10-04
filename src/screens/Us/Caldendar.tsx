import React from 'react'
import Layout from '../../components/Layout/Layout'
import Input from '../../components/Input/Input'

const Caldendar = () => {
  return (
    <Layout location='us'>
      <div className='flex flex-col mt-24 items-center justify-center w-1024 mb-14'>
          <div className=''>
              <h1 className='text-3xl sm:text-5xl'>Calendario Institucional</h1>
          </div>
          {/* <div className='hidden sm:block w-16'>
            <img src="https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Feldjt-png.png?alt=media&token=a31fec81-e6e8-42af-a263-735b9c7cb4cb" alt="eldjt" />
          </div> */}
          <div className='sm:mt-10 mt-7'>
            <img src="https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Fcalendario%20escolar.jpeg?alt=media&token=0618c470-cc96-4b22-869a-8ebe331ebf33" alt="" />  
          </div>
      </div>
    </Layout>
  )
}

export default Caldendar