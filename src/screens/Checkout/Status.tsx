import React, { useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import { ELDJTAPIURL, ELDJTWEBURL } from '../../utils/constans'
import axios from 'axios';
import { CheckIcon, ClockIcon } from '@heroicons/react/24/solid';

const Status = () => {

  const [amount, setAmount] = React.useState<number>(0);
  const [fee, setFee] = React.useState<number>(0);
  const [total, setTotal] = React.useState<number>(0);
  const [paymentID, setPaymentID] = React.useState<string>('');
  const [status, setStatus] = React.useState<string>('')
  const [empty, setEmpty] = React.useState<boolean>(false);

  useEffect(() => {

    getPayment();
  }, [])

  const getPayment = async() => {
    let config = {
      method: 'GET',
      url: `${ELDJTAPIURL}/api/pagos/${window.location.pathname.split('/')[3]}`,
      headers: { }
    };

    let response: any = null;

    try {
      response = await axios(config);
      console.log('res', response.data)
      setAmount(response.data.amount);
      setFee(response.data.fee);
      setTotal(response.data.total);
      setPaymentID(response.data.paymentID);
      setStatus(response.data.status);
    } catch (error) {
      setEmpty(true);
    }
  }
  return (
    <Layout location='services'>
      {!empty && <div className='flex flex-col mt-32 items-center justify-center w-1024 mb-14 px-4'>
        <h1 className='text-3xl sm:text-3xl text-center'>{status !== 'completed' ? 'Tu pago está siendo procesado' : 'Tu pago fue completado con éxito'}</h1>
        {status === 'completed' && <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mt-6`}>
          <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
        </div>}
        {status !== 'completed' && <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 mt-6`}>
          <ClockIcon className="h-6 w-6 text-yellow-600" aria-hidden="true" />
        </div>}
        <p className='mt-8'>
          <span>Tu ID de pago es:{' '}</span>
          <a className='font-bold' href={`${ELDJTWEBURL}/checkout/status/${window.location.pathname.split('/')[3]}`}>{window.location.pathname.split('/')[3]}</a>
        </p>
        <p className='mt-7 text-justify'>Da click en el ID de tu pago para actualizar su estatus. El estado de tu pago puede demorar algunos minutos en aparecer como completado. Si en 24 horas tu pago aún no se ha completado, por favor contáctanos.</p>
        <h6 className='font-semibold text-lg mt-6'>Información de tu pago</h6>
        <div className='flex flex-col gap-3 mx-auto mt-6 mb-6 sm:w-1/2 w-full'>
          <div className='flex justify-between'>
            <p className='font-bold'>Subtotal</p>
            <p>
              <span>{Intl.NumberFormat('es-MX', {style: 'currency', currency: 'MXN'}).format(amount)}{' '}</span>
              <span className='text-xs'>MXN</span>
            </p>
          </div>
          <div className='flex justify-between'>
            <p className='font-bold'>Cargo por servicio</p>
            <p>
              <span>{Intl.NumberFormat('es-MX', {style: 'currency', currency: 'MXN'}).format(fee)}{' '}</span>
              <span className='text-xs'>MXN</span>
            </p>
          </div>
          <div className='flex justify-between'>
            <p className='font-bold'>Total</p>
            <p>
              <span>{Intl.NumberFormat('es-MX', {style: 'currency', currency: 'MXN'}).format(total)}{' '}</span>
              <span className='text-xs'>MXN</span>
            </p>
          </div>
        </div>
      </div>}
      {empty &&
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 mt-10">
        <div className="text-center">
          <p className="text-base font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Pago no encontrado</h1>
          <p className="mt-6 text-base leading-7">Lo sentimos, no pudimos encontrar el pago con el ID:</p>
          <p className="text-base leading-7">{window.location.pathname.split('/')[3]}</p>
          <p className="mt-6 text-base leading-7">Verifica que el ID de pago esté correcto e intenta nuevamente.</p>

          <div className="mt-10 flex items-center justify-center gap-x-6 mb-10">
            <a
              href={ELDJTWEBURL}
              className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Volver a inicio
            </a>
          </div>
        </div>
      </main>
      }
    </Layout>
  )
}

export default Status