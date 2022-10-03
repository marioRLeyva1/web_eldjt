import React from 'react'
import Layout from '../../components/Layout/Layout'
import Input from '../../components/Input/Input'

const Scholarships = () => {
  return (
    <Layout location='admissions'>
      <div className='flex flex-col mt-24 items-center justify-center w-1024 mb-14'>
          <div className=''>
              <h1 className='text-3xl sm:text-5xl'>Becas</h1>
          </div>
          {/* <div className='hidden sm:block w-16'>
            <img src="https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Feldjt-png.png?alt=media&token=a31fec81-e6e8-42af-a263-735b9c7cb4cb" alt="eldjt" />
          </div> */}
          <div className='sm:mt-10 mt-7'>
              
          </div>
          <div className='sm:flex justify-center items-center sm:w-1024 sm:mt-10'>
            {/* <img className='w-96' src="https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Feldjt-png.png?alt=media&token=a31fec81-e6e8-42af-a263-735b9c7cb4cb" alt="eldjt" /> */}
            <div className='flex items-center justify-center p-4 sm:p-1 -mb-4'>
             <iframe className='shadow border' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15179.601881666835!2d-92.9335437!3d17.983367!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x68de260b6df9f227!2sEscuela%20Libre%20de%20Derecho%20y%20Jurisprudencia%20de%20Tabasco!5e0!3m2!1ses-419!2smx!4v1655332013040!5m2!1ses-419!2smx" width="400" height="300"  loading="lazy"></iframe>
            </div>
            <div className='sm:flex flex-col gap-4 mt-5 sm:w-96 hidden'>
                <h3 className='text-2xl text-center'>Contáctanos</h3>
                <Input type='text' placeholder={'Nombre Completo'} required={true}/>
                <Input type='email' placeholder={'Correo Electrónico'} required={true}/>
                <Input type='tel' placeholder={'Teléfono'} required={true}/>
                <Input type='text' placeholder={'Ciudad'} required={true}/>
                <button className='mx-5 mb-5 border-LG p-2 bg-secondary rounded text-white font-bold drop-shadow'>ENVIAR</button>
            </div>
          </div>
      </div>
    </Layout>
  )
}

export default Scholarships