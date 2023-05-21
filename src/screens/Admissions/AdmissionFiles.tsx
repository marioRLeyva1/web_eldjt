import React, { useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import Loader from '../../components/Loader/Loader';
import { ELDJTAPIURL, ELDJTWEBURL } from '../../utils/constans';
import axios from 'axios';
import Modal from '../../components/Modal/Modal';

/*

TO-DO

Que al entrar a esta página, se carguen solitos los nombres de los archivos que ya fueron subidos.
que al darle enviar, ya no se pueda entrar a esta pantalla nuevamnte
que al ingresar un id de alumno no existente, uestre un 404
 */

interface Modal {
    title: string,
    message: any,
    type: string
  }

const AdmissionFiles = () => {
    const [fileSelected, setFileSelected] = React.useState<any>(null);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [modal, setModal] = React.useState<Modal>({title: '', message: '', type: ''});
    const [openModal, setOpenModal] = React.useState<boolean>(false);
    const [empty, setEmpty] = React.useState<boolean>(false);

    useEffect(() => {
      getStudent()

    }, [])

    const getStudent = async() => {
        let config = {
            method: 'GET',
            url: `${ELDJTAPIURL}/api/admissions?id=${window.location.pathname.split('/')[3]}`,
            headers: { }
        };
        let response: any = null;
        try {
            response = await axios(config);
            console.log('res', response.data)
            if(response.data.status === 'pending'){
                setEmpty(true)
                setLoading(false);
            }else{
                setEmpty(false)
                setLoading(false);
            }
        } catch (error) {
            setEmpty(true);
            setLoading(false);
        }
    }

    const onHandleFile = async(target: any) => {
        setLoading(true);
        if(target.files) {
            const file = target.files[0];
            setFileSelected(file)
            const formData = new FormData();
            formData.append(target.id, file);
            formData.append('id', window.location.pathname.split('/')[3])
            try {
                const response = await axios.post(`${ELDJTAPIURL}/api/admissions/file`, formData);
                setLoading(false);
            } catch (error) {
                setModal({title: 'Error', message: 'Ocurrió un error', type: 'error'});
                setOpenModal(true);
                setLoading(false);
            }
        }
    }

    const onSendFiles = () => {
        setModal({title: 'Confirmación', message: 'Estás a punto de enviar los archivos para procesar tu registro. NO podrás modificar los archivos hasta que acudas a nuestras intalaciones, ¿desea continuar?', type: 'warning'});
        setOpenModal(true);
    }

    const onConfirmSend = async() => {
        setLoading(true);
        try {
            const response = await axios.post(`${ELDJTAPIURL}/api/admissions/status`, { id: window.location.pathname.split('/')[3], status: 'pending'});
            window.location.replace(ELDJTWEBURL)
        } catch (error) {
            setModal({title: 'Error', message: 'Ocurrió un error', type: 'error'});
            setOpenModal(true);
            setLoading(false);
        }

    }
  return (
    <Layout location='admissions'>
        <Modal open={openModal} onClose={() => setOpenModal(false)} onAccept={() => onConfirmSend()} {...modal}></Modal>
        {loading && <div className='absolute z-50 w-full h-full'>
            <Loader open={true} onCloseLoader={() => console.log('close')}></Loader>
        </div>}
        {!empty && <div className='mt-24 font-poppins sm:w-1024 p-4 w-screen'>
            <div className='text-center w-full '>
                <h1 className='text-xl sm:text-3xl'>Proceso de adminisión</h1>
                <p className=' mb-3 mt-5'>Tu ID de registro es: {window.location.pathname.split('/')[3]}</p>
                <p className=' mb-3 mt-10 text-justify'>Has terminado el llenado de datos. Ahora sube los archivos que a continuación te solicitamos.</p>
                <p className=' text-justify'>Puedes completar mas tarde este proceso o si ya has subido algunos archivos pero no has terminado, puedes terminarlo después. 
                    <span className='font-bold'>{' '}NO perderás tu progreso.{' '}</span>
                    Para poder hacerlo, solo ingresa a este mismo enlace más tarde.
                </p>
            </div>
            <div className='w-full flex flex-col sm:gap-3 gap-7 mt-14'>
                <div className='flex flex-col sm:flex-row justify-between'>
                    <p className='font-semibold'>Acta de nacimiento</p>
                    <input type='file' id='acta de nacimiento' accept='.pdf' onChange={(e) => onHandleFile(e.target)}></input>
                </div>
                <div className='flex flex-col sm:flex-row justify-between'>
                    <p className='font-semibold'>CURP</p>
                    <input type='file' id='curp' accept='.pdf' onChange={(e) => onHandleFile(e.target)}></input>
                </div>
                <div className='flex flex-col sm:flex-row justify-between'>
                    <p className='font-semibold'>Identificación escolar con fotografía o INE</p>
                    <input type='file' id='identificacion' accept='.pdf' onChange={(e) => onHandleFile(e.target)}></input>
                </div>
                <div className='flex flex-col sm:flex-row justify-between'>
                    <p className='font-semibold'>Comprobante de domicilio</p>
                    <input type='file' id='comprobante de domicilio' accept='.pdf' onChange={(e) => onHandleFile(e.target)}></input>
                </div>
                <div className='flex flex-col sm:flex-row justify-between'>
                    <p className='font-semibold sm:w-96'>Certificado de Bachillerato o su equivalente en el Sistema Educativo Nacional</p>
                    <input type='file' id='certificado escolar' accept='.pdf' onChange={(e) => onHandleFile(e.target)}></input>
                </div>
            </div>
            <div className="mt-14 flex items-center justify-center gap-x-6">
                <button
                type="button"
                className="w-24 h-10 rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => onSendFiles()}
                >
                Enviar
                </button>
          </div>

        </div>}
        {empty &&
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 mt-10">
            <div className="text-center">
            <p className="text-base font-semibold text-primary">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Solicitud no encontrada</h1>
            <p className="mt-6 text-base leading-7">Lo sentimos, no pudimos encontrar la solicitud con el ID:</p>
            <p className="text-base leading-7">{window.location.pathname.split('/')[3]}</p>
            <p className="mt-6 text-base leading-7">Verifica que el ID de la solicitud esté correcto e intenta nuevamente.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6 mb-10">
                <a
                href={ELDJTWEBURL}
                className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Volver a inicio
                </a>
            </div>
            </div>
        </main>}
    </Layout>
  )
}

export default AdmissionFiles