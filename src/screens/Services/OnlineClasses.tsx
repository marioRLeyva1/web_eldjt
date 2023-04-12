import React, { useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import Input from '../../components/Input/Input'
import Card from '../../components/Card/Card'
import { ELDJTAPIURL } from '../../utils/constans'
import axios from 'axios'

const OnlineClasses = () => {
  const [classroom, setClassroom] = React.useState<{id: number; subject: string; date: number, img: string, url:string}[]>([]);
  const [ready, setReady] = React.useState(false);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    getClassrooms();
}, [])

  const getClassrooms = async () => {
    try {
        // const res = await fetch(`${ELDJTAPIURL}/api/news`);
        // console.log(await res.json())
        let config = {
            method: 'GET',
            url: `${ELDJTAPIURL}/api/classroom`,
            headers: { }
          };

        let res = await axios(config);
        console.log('res', res.data)
        setClassroom(res.data.news);
        setReady(true);
    } catch (error) {
        console.log('error',error);
    }
}
  return (
    <Layout location='services'>
      <div className='flex flex-col mt-24 items-center justify-center w-1024 mb-14'>
          <div className=''>
              <h1 className='text-3xl sm:text-5xl'>Clases en línea</h1>
          </div>
          {/* <div className='hidden sm:block w-16'>
            <img src="https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Feldjt-png.png?alt=media&token=a31fec81-e6e8-42af-a263-735b9c7cb4cb" alt="eldjt" />
          </div> */}
          <div className='sm:mt-10 mt-7'>
            <p className='flex flex-col text-justify px-8 gap-4'>
              <span>Aquí están disponibles los enlaces a las clases en línea. Recuerda tener a la mano la clave de acceso.</span>
            </p>
          </div>
          <div className='sm:flex sm:flex-wrap sm:gap-10 items-center justify-center'>
            {classroom.map((cr) => <Card img={cr.img} buttonLabel='Entrar' title={cr.subject} subtitle={cr.date}/>)}
          </div>
          {/* <div className='sm:flex justify-center items-center sm:w-1024 sm:mt-10'>
            <img className='w-96' src="https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Feldjt-png.png?alt=media&token=a31fec81-e6e8-42af-a263-735b9c7cb4cb" alt="eldjt" />
            <div className='sm:flex flex-col gap-4 mt-5 sm:w-96 hidden'>
                <h3 className='text-2xl text-center'>Contáctanos</h3>
                <Input type='text' placeholder={'Nombre Completo'} required={true}/>
                <Input type='email' placeholder={'Correo Electrónico'} required={true}/>
                <Input type='tel' placeholder={'Teléfono'} required={true}/>
                <Input type='text' placeholder={'Ciudad'} required={true}/>
                <button className='mx-5 mb-5 border-LG p-2 bg-secondary rounded text-white font-bold drop-shadow'>ENVIAR</button>
            </div>
          </div> */}
      </div>
    </Layout>
  )
}

export default OnlineClasses