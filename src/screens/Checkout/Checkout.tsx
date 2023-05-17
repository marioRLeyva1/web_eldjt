import React, { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { ELDJTAPIURL } from '../../utils/constans';
import axios from 'axios';
import PaymentComponent from './components/PaymentComponent';
import Layout from '../../components/Layout/Layout';
import Modal from '../../components/Modal/Modal';
import Loader from '../../components/Loader/Loader';

const stripePromise = loadStripe(process.env.NODE_ENV === 'development' ? "pk_test_51N10n8CeY0BjF2sxO4cohy2ULK78XACu3uMnanlca46r1UrQAKJlMK8Q0HWNWahD8QOsyZkTnNMxutSQ6MdALSdA00msuxjH5X" : 'pk_live_51N10n8CeY0BjF2sx5ioaWraewCWwx8CueHyadYkVWIlAQOfOCPygWJJIq8399nQveaOi4X4xp3ePqVxHeB0hhuIX00YXdS68Xm');
interface Modal {
  title: string,
  message: any,
  type: string
}

const descriptionTypes = [
  {key: 'inscription', name: 'Inscripción'},
  {key: 'reinscription', name: 'Reinscripción'},
  {key: 'tuition', name: 'Colegiatura'},
  {key: 'special_exam', name: 'Examen extraordinario'},
  {key: 'degree_exam', name: 'Examen a título de suficiencia'},
];
const Checkkout = () => {

  const [clientSecret, setClientSecret] = React.useState('')
  const [paymentInfo, setPaymentInfo] = React.useState<any>({});
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [modal, setModal] = React.useState<Modal>({title: '', message: '', type: ''});
  const [amount, setAmount] = React.useState<number>(0);
  const [fee, setFee] = React.useState<number>(0);
  const [total, setTotal] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [paymentID, setPaymentID] = React.useState<string>('');

  // useEffect(() => {
  //   createPaymentIntent();
  // },[]);

  const onChangePaymentData = (e: any) => {
    setPaymentInfo({...paymentInfo, [e.target.id]: e.target.value});
  }

  const createPaymentIntent = async() => {

    if(paymentInfo.description && paymentInfo.name && paymentInfo.last_name && paymentInfo.mo_last_name && paymentInfo.amount){

      setLoading(true);

      let config = {
        method: 'post',
        url: `${ELDJTAPIURL}/api/pagos/intent`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(paymentInfo)
      };

        try {
          let response = await axios(config);
          console.log(response.data)
          setClientSecret(response.data.client_secret);
          setAmount(response.data.amount);
          setFee(response.data.fee);
          setTotal(response.data.total);
          setPaymentID(response.data.paymentID);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setModal({title: 'Ha ocurrido un error', message: 'Error', type: 'error'})
          setOpenModal(true);
        }
    }else{
      setModal({title: 'Ha ocurrido un error', message: 'No se han completado todos los campos', type: 'error'})
      setOpenModal(true);
    }
  }

  return (
    <Layout location='services'>
      <Modal open={openModal} onClose={() => setOpenModal(false)} onAccept={() => createPaymentIntent()} {...modal}></Modal>
      <div className='flex flex-col mt-32 items-center justify-center w-1024 mb-14 px-4'>
        <Loader open={loading} message='Generando ficha de pago' onCloseLoader={() => console.log('close')}></Loader>
        {!loading && <div className='mb-16 text-center'>
          <h1 className='text-3xl sm:text-3xl'>Continúa con el pago en línea</h1>
        </div>}
        {!clientSecret && !loading && <React.Fragment>
          <div>
            <p className='text-justify'>
              <span>Rellana los siguientes datos para que podamos generar tu pago.{' '}</span>
              <span className='font-bold'>Revisa dos veces la información antes de enviarla.</span>
            </p>
          </div>
          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2 mt-16">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Apellido paterno
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last_name"
                  autoComplete="last-name"
                  required
                  onChange={(e) => onChangePaymentData(e)}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Apellido materno
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="mo-last-name"
                  id="mo_last_name"
                  autoComplete="family-name"
                  required
                  onChange={(e) => onChangePaymentData(e)}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Nombre(s)
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="given-name"
                  onChange={(e) => onChangePaymentData(e)}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Matricula
              </label>
              <div className="mt-2">
                <input
                  id="enrollment"
                  name="enrollment"
                  type="text"
                  autoComplete="enrollment"
                  disabled={paymentInfo.description ? paymentInfo.description === 'Inscripción' ? true : false : true}
                  onChange={(e) => onChangePaymentData(e)}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className='sm:col-span-6'>
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Motivo de pago
              </label>
              <select
                id="description"
                name="description"
                onChange={(e) => onChangePaymentData(e)}
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option disabled selected ></option>
                {descriptionTypes.map(dt => <option>{dt.name}</option>)}
              </select>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">
                Monto del pago
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  className="block appearance-none w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="0.00"
                  onChange={(e) => onChangePaymentData(e)}
                  aria-describedby="amount-currency"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-gray-500 sm:text-sm" id="price-currency">
                    MXN
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex items-center justify-center gap-x-6 mx-auto">
            <button
              type="button"
              className="w-24 h-10 rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => createPaymentIntent()}
            >
              Continuar
            </button>
          </div>
        </React.Fragment>}
        {clientSecret && (
            <Elements options={{clientSecret, locale: 'es'}} stripe={stripePromise}>
              <div className='sm:w-1/2 w-full'>
                <h6 className='text-center font-bold'>Resumen</h6>
                <div className='flex flex-col gap-3 mx-auto mt-3 mb-6'>
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
              </div>
              <PaymentComponent paymentID={paymentID}></PaymentComponent>
            </Elements>
        )}
      </div>
    </Layout>
  )
}

export default Checkkout