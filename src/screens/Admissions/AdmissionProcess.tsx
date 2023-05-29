import React, { FormEvent } from 'react'
import Layout from '../../components/Layout/Layout'
import Input from '../../components/Input/Input'
import { ExclamationCircleIcon, InformationCircleIcon, PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ELDJTAPIURL, ELDJTWEBURL } from '../../utils/constans'
import axios from 'axios'
import Loader from '../../components/Loader/Loader'
import Modal from '../../components/Modal/Modal'
interface Modal {
  title: string,
  message: any,
  type: string
}

const AdmissionProcess = () => {

  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState<boolean>(false);
  const [modal, setModal] = React.useState<Modal>({title: '', message: '', type: ''});
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const onHandleForm = (e: FormEvent) => {

    const target = e.target as HTMLInputElement;

    if(target.type === 'radio'){
      switch (target.id) {
        case 'disability-yes':
          setData({...data, [target.name]: true})
          break;
        case 'disability-no':
          setData({...data, [target.name]: false})
          break;
        case 'working-yes':
          setData({...data, [target.name]: true})
          break;
        case 'working-no':
          setData({...data, [target.name]: false})
          break;
        case 'working-place-public':
          setData({...data, [target.name]: 'public'})
          break;
        case 'working-place-private':
          setData({...data, [target.name]: 'private'})
          break;
        case 'working-place-independent':
          setData({...data, [target.name]: 'independent'})
          break;
        case 'working-bachelors-indispensable':
          setData({...data, [target.name]: 'indispensable'})
          break;
        case 'working-bachelors-necessary':
          setData({...data, [target.name]: 'necessary'})
          break;
        case 'working-bachelors-irrelevant':
          setData({...data, [target.name]: 'irrelevant'})
          break;
        default:
          break;
      }
    }else if(target.type === 'checkbox'){
      setData({...data, [target.name]: target.checked});
    }else{
      setData({...data, [target.name]: target.value.toLocaleUpperCase()});
    }
  }

  const onSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    let config = {
        method: 'post',
        url: `${ELDJTAPIURL}/api/admissions`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
    };

    try {
      let response: any = await axios(config);
      window.location.replace(`${ELDJTWEBURL}/admisiones/registro/${response.data.id}`);
      setLoading(false);
    } catch (error) {
      setModal({title: 'Error', message: 'Ocurrió un error', type: 'error'});
      setOpenModal(true);
    }

  }

  return (
    <Layout location='admissions'>
      <Modal open={openModal} onClose={() => setOpenModal(false)} onAccept={() => setOpenModal(false)} {...modal}></Modal>
      <Loader open={loading} onCloseLoader={() => console.log('close')}></Loader>
      {!loading && <div className=' mt-24 font-poppins w-1024 p-4'>
        <div className='text-center w-full '>
          <h1 className='text-xl sm:text-5xl'>Proceso de adminisión</h1>
          <p className='mt-5'>Ya inició nuestro proceso de adminisión.</p>
          <p className=' mb-10'>Llena la información del formmulario a continuación y sube tus datos.</p>
        </div>
        <div className="relative mb-10">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-2 text-sm text-gray-500">Formulario</span>
          </div>
        </div>
        <form onChange={(e) => onHandleForm(e)} onSubmit={(e) => onSubmitForm(e)}>
          <div className="space-y-12">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
              <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900">Datos personales</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  LLena los espacios con tu información personal.
                </p>
              </div>

              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Apellido paterno
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last_name"
                      id="last-name"
                      autoComplete="last-name"
                      required
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
                      name="mo_last_name"
                      id="mo-last-name"
                      autoComplete="family-name"
                      required
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
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                    Género
                  </label>
                  <div className="mt-2">
                    <select
                      id="gender"
                      name="gender"
                      autoComplete="gender"
                      required
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option disabled selected ></option>
                      <option>Masculino</option>
                      <option>Femenino</option>
                      <option>Otro</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="bday" className="block text-sm font-medium leading-6 text-gray-900">
                    Fecha de nacimiento
                  </label>
                  <div className="mt-2">
                    <input
                      id="birthdate"
                      name="birthdate"
                      type="date"
                      required
                      autoComplete="bday"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="birth-place" className="block text-sm font-medium leading-6 text-gray-900">
                    Lugar de nacimiento
                  </label>
                  <div className="mt-2">
                    <input
                      id="birth-place"
                      name="birth_place"
                      type="text"
                      autoComplete="off"
                      required
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="marital-status" className="block text-sm font-medium leading-6 text-gray-900">
                    Estado civil
                  </label>
                  <div className="mt-2">
                    <select
                      id="marital-status"
                      name="marital_status"
                      autoComplete="off"
                      required
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option disabled selected ></option>
                      <option>Soltero/a</option>
                      <option>Casado/a</option>
                      <option>Otro</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                    Dirección particular
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="street_address"
                      id="street-address"
                      autoComplete="street-address"
                      required
                      placeholder="Calle  /  N°  /  Colonia"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                    Ciudad
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      required
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                    Estado
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      required
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                    Código Postal
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="postal_code"
                      id="postal-code"
                      autoComplete="postal-code"
                      required
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Correo Electrónico
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="nombre@dominio.com"
                      aria-invalid="true"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="curp" className="block text-sm font-medium leading-6 text-gray-900">
                    CURP
                  </label>
                  <div className="mt-2">
                    <input
                      id="curp"
                      name="curp"
                      type="text"
                      autoComplete="curp"
                      required
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="rfc" className="block text-sm font-medium leading-6 text-gray-900">
                    R.F.C.
                  </label>
                  <div className="mt-2">
                    <input
                      id="rfc"
                      name="rfc"
                      type="text"
                      autoComplete="rfc"
                      required
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="landline" className="block text-sm font-medium leading-6 text-gray-900">
                    Teléfono fijo
                  </label>
                  <div className="mt-2">
                    <input
                      type="tel"
                      name="landline"
                      id="landline"
                      autoComplete="landline"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="tel" className="block text-sm font-medium leading-6 text-gray-900">
                    Celular
                  </label>
                  <div className="mt-2">
                    <input
                      type="tel"
                      name="tel"
                      id="tel"
                      autoComplete="tel"
                      required
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <fieldset className='sm:col-span-3'>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">¿Tienes alguna discapacidad?</legend>
                  <p className="mt-1 text-sm leading-6 text-gray-600">Especifica</p>
                  <div className="space-y-6 flex items-center align-middle gap-5">
                    <div className="flex mt-6 items-center gap-x-3">
                      <input
                        id="disability-yes"
                        name="disability"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label htmlFor="disability-yes" className="block text-sm font-medium leading-6 text-gray-900">
                        Sí
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="disability-no"
                        name="disability"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label htmlFor="disability-no" className="block text-sm font-medium leading-6 text-gray-900">
                        No
                      </label>
                    </div>
                    <input
                      type="text"
                      name="disability_type"
                      id="disability-type"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </fieldset>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
              <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900">Datos Escolares</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">Ingresa los datos de tu escuela de procedencia y la carrera a la que aspiras cursar con nosotros.</p>
              </div>

              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                <div className="sm:col-span-3">
                  <label htmlFor="bachelors" className="block text-sm font-medium leading-6 text-gray-900">
                    Licenciatura a la que se inscribe
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="bachelors"
                      id="bachelors"
                      required
                      autoComplete="off"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="mode" className="block text-sm font-medium leading-6 text-gray-900">
                    Modalidad
                  </label>
                  <div className="mt-2">
                    <select
                      id="mode"
                      name="mode"
                      required
                      autoComplete="off"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option disabled selected ></option>
                      <option>Escolarizada</option>
                      <option>Mixta (Sábado y Domingo - Matutino)</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="shift" className="block text-sm font-medium leading-6 text-gray-900">
                    Turno
                  </label>
                  <div className="mt-2">
                    <select
                      id="shift"
                      name="shift"
                      required
                      autoComplete="off"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option disabled selected ></option>
                      <option>Matutino</option>
                      <option>Vespertino</option>
                    </select>
                  </div>
                </div>

                <fieldset className='sm:col-span-6'>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">Estudios realizados</legend>
                  <div className="mt-6 space-y-3">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="secondary-school"
                          name="secondary_school"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="secondary-school" className="font-medium text-gray-900">
                          Secundaria
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="high-school"
                          name="high_school"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="high-school" className="font-medium text-gray-900">
                          Bachillerato
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="bachelor-concluded"
                          name="bachelor_concluded"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="bachelor-concluded" className="font-medium text-gray-900">
                          Licenciatura concluida
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="bachelor-not-concluded"
                          name="bachelor_not_concluded"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="bachelor-not-concluded" className="font-medium text-gray-900">
                          Licenciatura suspendida
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <div className="sm:col-span-6">
                  <label htmlFor="last-school" className="block text-sm font-medium leading-6 text-gray-900">
                    Lugar donde se realizó el último grado de estudios
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last_school"
                      id="last-school"
                      placeholder='Escuela'
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <div className="">
                    <input
                      type="text"
                      name="last_school_city"
                      id="last-school-city"
                      placeholder='Ciudad'
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <div className="">
                    <input
                      type="text"
                      name="last_school_state"
                      id="last-school-state"
                      placeholder='Estado'
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
              <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900">Datos de contacto</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">Ingresa los datos que pueden servir para contacterte o contactar a alguien de tu familia.</p>
              </div>

              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                <div className="sm:col-span-6">
                  <label htmlFor="emergency-contact" className="block text-sm font-medium leading-6 text-gray-900">
                    Contacto de emergencias
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="emergency_contact"
                      id="emergency-contact"
                      autoComplete="off"
                      required
                      placeholder='Nombre'
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      type="tel"
                      name="emergency_contact_tel"
                      id="emergency-contact-tel"
                      autoComplete="off"
                      placeholder='Teléfono'
                      required
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
              <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900">Datos ocupacionales</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Ingresa los datos de tu empleo actual (si aplica).
                </p>
              </div>

              <div className="max-w-2xl space-y-10 md:col-span-2">
              <div className='sm:flex gap-20'>
                <fieldset className='sm:col-span-3'>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">¿Trabajas actualmente?</legend>
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="working-yes"
                          name="working"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor="working-yes" className="block text-sm font-medium leading-6 text-gray-900">
                          Si
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="working-no"
                          name="working"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor="working-no" className="block text-sm font-medium leading-6 text-gray-900">
                          No
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className='sm:col-span-3 mt-10 sm:mt-0'>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">El lugar donde trabaja es:</legend>
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="working-place-public"
                          name="working_place"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor="working-place-public" className="block text-sm font-medium leading-6 text-gray-900">
                          Público
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="working-place-private"
                          name="working_place"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor="working-place-private" className="block text-sm font-medium leading-6 text-gray-900">
                          Privado
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="working-place-independent"
                          name="working_place"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor="working-place-independent" className="block text-sm font-medium leading-6 text-gray-900">
                          Independiente
                        </label>
                      </div>
                    </div>
                  </fieldset>
              </div>
              <div className="sm:col-span-6">
                <label htmlFor="work-place-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Lugar de trabajo
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="work_place_name"
                    id="work-place-name"
                    autoComplete="off"
                    placeholder='Nombre'
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="mt-2">
                  <input
                    type="tel"
                    name="work_place_address"
                    id="work-place-address"
                    autoComplete="off"
                    placeholder='Dirección'
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className='sm:flex gap-20'>
                <fieldset className='sm:col-span-3'>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">En su trabajo, contar con estudios es:</legend>
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="working-bachelors-indispensable"
                          name="working_bachelors"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor="working-bachelors-indispensable" className="block text-sm font-medium leading-6 text-gray-900">
                          Indispensable
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="working-bachelors-necessary"
                          name="working_bachelors"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor="working-bachelors-necessary" className="block text-sm font-medium leading-6 text-gray-900">
                          Necesario
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="working-bachelors-irrelevant"
                          name="working_bachelors"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor="working-bachelors-irrelevant" className="block text-sm font-medium leading-6 text-gray-900">
                          Irrelevante
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <div className="sm:col-span-3">
                    <label htmlFor="goal" className="block text-sm font-medium leading-6 text-gray-900">
                      Los estudios que desea realizar, le permitirán en su trabajo:
                    </label>
                    <div className="mt-2">
                      <select
                        id="goal"
                        name="goal"
                        autoComplete="off"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option disabled selected ></option>
                        <option>Ser promovido</option>
                        <option>Cumplir políticas institucionales</option>
                        <option>Desempeñar mejor su trabajo</option>
                        <option>Otro</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="grid grid-cols-1 gap-x-8 gap-y-10 pb-12 md:grid-cols-3">
              <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900">Otros</h2>
              </div>

              <div className="max-w-2xl space-y-10 md:col-span-2">
              <div className="sm:col-span-6">
                    <label htmlFor="eldjt" className="block text-sm font-medium leading-6 text-gray-900">
                      ¿A través de qué medio se conoció a la Escuela Libre de Derecho y Jurisprudencia de Tabasco?
                    </label>
                    <div className="mt-2">
                      <select
                        id="eldjt"
                        name="eldjt"
                        autoComplete="off"
                        required
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option disabled selected ></option>
                        <option>Radio</option>
                        <option>Prensa</option>
                        <option>TV</option>
                        <option>Amigos</option>
                        <option>Espectacular</option>
                        <option>Facebook</option>
                        <option>Twitter</option>
                        <option>Instagram</option>
                      </select>
                    </div>
                  </div>
                  <fieldset className='sm:col-span-6'>
                  <div className=" space-y-3">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="provitions"
                          name="provitions"
                          type="checkbox"
                          required
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="provitions" className="font-medium text-gray-900">
                          <span>Acepto las</span>
                          <a className='text-primary underline' href="https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2FDisposiciones%20ELDJT.pdf?alt=media&token=1457159d-b8d1-4779-9dd0-958406ff3785"> disposiciones de la ELDJT</a>
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="privacy-policy"
                          name="privacy_policy"
                          type="checkbox"
                          required
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="privacy-policy" className="font-medium text-gray-900">
                          <span>Acepto el</span>
                          <a className='text-primary underline' href="https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2FAVISO%20DE%20PRIVACIDAD.pdf?alt=media&token=8ca02342-c961-4697-bae0-c709addde386"> aviso de privacidad</a>
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="rounded-md bg-blue-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
              </div>
              <div className="ml-3 flex-1 md:flex md:justify-between">
                <p className="text-sm text-blue-700">Para completar el proceso, tendrás que subir la documentación requerida en la siguiente pantalla.
                Ten a la mano tu Acta de Nacimiento, CURP, Identifiación Escolar con fotografía o INE, comprobante de domicilio y el Certificado de Bachillerato o su equivalente en el Sistema Educativo Nacional (en caso de no haber cursado tus estudios en el  Sistema Educativo Nacional, deberás añadir la Revalidación de Estudios ante la SEP).</p>
              </div>
            </div>
    </div>

          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              type="submit"
              className="w-24 h-10 rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>}
    </Layout>
  )
}

export default AdmissionProcess