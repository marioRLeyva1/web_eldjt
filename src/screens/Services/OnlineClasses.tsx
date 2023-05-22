import React, { useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import Input from '../../components/Input/Input'
import Card from '../../components/Card/Card'
import { ELDJTAPIURL, ELDJTWEBURL } from '../../utils/constans'
import axios from 'axios'

const OnlineClasses = () => {
  const [classroom, setClassroom] = React.useState<{id: number; subject: string; date: number, img: string, url:string}[]>([]);
  const [ready, setReady] = React.useState(false);
  const [empty, setEmpty] = React.useState<boolean>(false);

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
        if(res.data.classrooms.length === 0){
          setEmpty(true);
        }else{
          setClassroom(res.data.classrooms);
        }
        setReady(true);
    } catch (error) {
        console.log('error',error);
    }
}
  return (
    <Layout location='services'>
      {!empty && <div className='flex flex-col mt-24 items-center justify-center w-1024 mb-14'>
          <div className=''>
              <h1 className='text-3xl sm:text-5xl'>Clases en línea</h1>
          </div>
          <div className='sm:mt-10 mt-7'>
            <p className='flex flex-col text-justify px-8 gap-4'>
              <span>Aquí están disponibles los enlaces a las clases en línea. Recuerda tener a la mano la clave de acceso.</span>
            </p>
          </div>
          <div className='sm:flex sm:flex-wrap sm:gap-10 items-center justify-center'>
            {classroom.map((cr) => <Card img={cr.img} buttonLabel='Entrar' title={cr.subject} subtitle={cr.date}/>)}
          </div>
      </div>}
      {empty &&
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 mt-10">
            <div className="text-center">
            {/* <p className="text-base font-semibold text-primary">Esto está un poco solo</p> */}
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Esto está un poco solo</h1>
            <p className="mt-6 text-base leading-7">No hemos encontrado contenido para mostrarte aquí</p>
            {/* <p className="text-base leading-7">{window.location.pathname.split('/')[3]}</p> */}
            <p className="mt-6 text-base leading-7">Vuelve más tarde</p>
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

export default OnlineClasses