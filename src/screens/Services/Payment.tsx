import React, { useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import Input from '../../components/Input/Input'
import { useNavigate } from 'react-router-dom'

const Payment = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://resources.openpay.mx/lib/openpay-js/1.2.38/openpay.v1.min.js";
    script.async = true;

    console.log(script.async);
  
    document.body.appendChild(script);
  },[]);

  const onHandleCheckout = () => {
    navigate('/checkout')
  }


  return (
    <Layout location='services'>
    <div className='flex flex-col mt-48 items-center w-1024 mb-14 h-96'>
        <div className=''>
            <h1 className='text-3xl sm:text-5xl'>Pago en línea</h1>
        </div>
        {/* <div className='hidden sm:block w-16'>
          <img src="https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Feldjt-png.png?alt=media&token=a31fec81-e6e8-42af-a263-735b9c7cb4cb" alt="eldjt" />
        </div> */}
        <div className='sm:mt-10 mt-7 flex flex-col text-justify'>
              <p className='flex flex-col text-justify px-8 gap-4'>
                <span>Realiza el pago de la colegiatura desde nuestro sitio web. Puedes realizar el pago mediante tarjeta de crédito/débito y en tiendas de conveniencia OXXO.</span>
              </p>
              <p className='flex flex-col text-justify px-8 gap-4 mt-4 mb-4'>
                <span>Será necesario que rellenes algunos datos antes de realizar el pago.</span>
              </p>
              <button className='mx-auto mb-5 mt-6 border py-2 px-5 bg-secondary rounded text-white font-bold drop-shadow' onClick={() => onHandleCheckout()}>IR A PAGAR</button>
        </div>
    </div>
  </Layout>
  )
}

export default Payment