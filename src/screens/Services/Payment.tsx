import React, { useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import Input from '../../components/Input/Input'
import { useNavigate } from 'react-router-dom'

const Payment = () => {

  const navigate = useNavigate();

  const onHandleCheckout = () => {
    navigate('/checkout')
  }


  return (
    <Layout location='services'>
    <div className='flex flex-col mt-24 items-center justify-center w-1024 mb-14'>
        <div className=''>
            <h1 className='text-3xl sm:text-5xl'>Pago en línea</h1>
        </div>
        {/* <div className='hidden sm:block w-16'>
          <img src="https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Feldjt-png.png?alt=media&token=a31fec81-e6e8-42af-a263-735b9c7cb4cb" alt="eldjt" />
        </div> */}
        <div className='sm:mt-10 mt-7 flex flex-col items-center justify-center'>
              <p className='flex flex-col text-justify px-8 gap-4'>
                <span>Realiza el pago de la colegiatura desde nuestro sitio web. Puedes realizar el pago mediante tarjeta de crédito/débito y transferencia bancaria.</span>
              </p>
              <button className='mx-5 mb-5 mt-6 border py-2 px-5 bg-secondary rounded text-white font-bold drop-shadow' onClick={() => onHandleCheckout()}>IR A PAGAR</button>
        </div>
        <div className='sm:flex justify-center items-center sm:w-1024 sm:mt-10'>
          <img className='w-96' src="https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Feldjt-png.png?alt=media&token=a31fec81-e6e8-42af-a263-735b9c7cb4cb" alt="eldjt" />
          <div className='sm:flex flex-col gap-4 mt-5 sm:w-96 hidden'>
              <h3 className='text-2xl text-center'>Contáctanos</h3>
              <Input type='text' placeholder={'Nombre Completo'} required={true}/>
              <Input type='email' placeholder={'Correo Electrónico'} required={true}/>
              <Input type='tel' placeholder={'Teléfono'} required={true}/>
              <Input type='text' placeholder={'Ciudad'} required={true}/>
              <button className='mx-5 mb-5 border p-2 bg-secondary rounded text-white font-bold drop-shadow'>ENVIAR</button>
          </div>
        </div>
    </div>
  </Layout>
  )
}

export default Payment