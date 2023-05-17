import React from 'react'
import Layout from '../../components/Layout/Layout'
import Loader from '../../components/Loader/Loader';
import { ELDJTAPIURL } from '../../utils/constans';
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
    const [uploading, setUploading] = React.useState<boolean>(false);
    const [modal, setModal] = React.useState<Modal>({title: '', message: '', type: ''});
    const [openModal, setOpenModal] = React.useState<boolean>(false);

    const onHandleFile = async(target: any) => {
        setUploading(true);
        if(target.files) {
            const file = target.files[0];
            setFileSelected(file)
            const formData = new FormData();
            formData.append(target.id, file);
            formData.append('id', window.location.pathname.split('/')[3])
            try {
                const response = await axios.post(`${ELDJTAPIURL}/api/admissions/file`, formData);
                setUploading(false);
            } catch (error) {
                setModal({title: 'Error', message: 'Ocurrió un error', type: 'error'});
                setOpenModal(true);
                setUploading(false);
            }
        }
    }
  return (
    <Layout location='admissions'>
        <Modal open={openModal} onClose={() => setOpenModal(false)} onAccept={() => setOpenModal(false)} {...modal}></Modal>
        {uploading && <div className='absolute z-50 w-full h-full'>
            <Loader open={true} onCloseLoader={() => console.log('close')}></Loader>
        </div>}
        <div className='mt-24 font-poppins sm:w-1024 p-4 w-screen'>
            <div className='text-center w-full '>
                <h1 className='text-xl sm:text-3xl'>Proceso de adminisión</h1>
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
                    <input type='file' id='certificado escolar' accept='.pdf'></input>
                </div>
            </div>
            <div className="mt-14 flex items-center justify-center gap-x-6">
                <button
                type="button"
                className="w-24 h-10 rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Enviar
                </button>
          </div>

        </div>
    </Layout>
  )
}

export default AdmissionFiles