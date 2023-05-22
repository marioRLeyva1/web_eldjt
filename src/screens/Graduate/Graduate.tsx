import React from 'react'
import Layout from '../../components/Layout/Layout'
import { ELDJTWEBURL } from '../../utils/constans'

const Graduate = () => {
  return (
    <Layout location='graduate'>
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
        </main>
    </Layout>
  )
}

export default Graduate