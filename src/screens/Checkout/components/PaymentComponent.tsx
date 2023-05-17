import React from 'react'
import Footer from '../../../components/Footer/Footer'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Modal from '../../../components/Modal/Modal';
import { Oval } from 'react-loader-spinner';
import { ELDJTAPIURL, ELDJTWEBURL } from '../../../utils/constans';

const PaymentComponent = (props: any) => {

    const [modal, setModal] = React.useState<any>({open: false, title:'', message: '', type: ''});
    const [loading, setLoading] = React.useState<boolean>(false);

    const onCloseModal = () => {
        setModal({...modal, open: false});
    }

    const stripe = useStripe();
    const elements = useElements();

    const onPayment = async() => {
      setLoading(true);
      if (!stripe || !elements) {
          // Stripe.js hasn't yet loaded.
          // Make sure to disable form submission until Stripe.js has loaded.
          return;
        }
        const { error } = await stripe.confirmPayment({
          elements,
          confirmParams: {
            // Make sure to change this to your payment completion page
            return_url: `${ELDJTWEBURL}/checkout/status/${props.paymentID}`,
          },
        });
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (error.type === "card_error" || error.type === "validation_error") {
          console.log(error.message);
          setModal({open: true, title: 'Error', message: error.message, type: 'error'})
          setLoading(false);
        } else {
          console.log("An unexpected error occurred.");
          setLoading(false);
        }
    }
  return (
    <div className='sm:w-1/2 w-full'>
        <Modal open={modal.open} title={modal.title} message={modal.message} type={modal.type} onClose={() => onCloseModal()} onAccept={() => onCloseModal()}></Modal>
        <PaymentElement id="payment-element" options={{layout: 'tabs'}} />
        <div className="mt-12 flex items-center justify-center gap-x-6 mx-auto">
            <button
              type="button"
              onClick={() => onPayment()}
              disabled={loading}
              className="w-48 h-10 rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {
                !loading ? 'Pagar' : 
                <div className='flex w-full h-full m-auto justify-center items-center'>
                  <Oval
                  height={25}
                  width={25}
                  color="#FFE7D3"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel='oval-loading'
                  secondaryColor="white"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                  />
                </div>
              }
            </button>
        </div>
    </div>
  )
}

export default PaymentComponent