import React from 'react'
import Layout from '../../components/Layout/Layout'
import Input from '../../components/Input/Input'

const EducationalModel = () => {
  return (
    <Layout location='us'>
      <div className='flex flex-col mt-24 items-center justify-center w-1024 mb-14'>
          <div className=''>
              <h1 className='text-3xl sm:text-5xl'>Modelo Educativo</h1>
          </div>
          {/* <div className='hidden sm:block w-16'>
            <img src="https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Feldjt-png.png?alt=media&token=a31fec81-e6e8-42af-a263-735b9c7cb4cb" alt="eldjt" />
          </div> */}
          <div className='sm:mt-10 mt-7'>
              <p className='flex flex-col text-justify px-8 gap-4'>
                <span>La Escuela Libre de Derecho y Jurisprudencia de Tabasco, es una Institución de Educación Superior Especializada en la impartición y generación del conocimiento de las Ciencias Jurídicas.</span>
                <span>La excelencia de su proceso educativo se obtiene a través del aprendizaje situado que permite atender y responder a los problemas sociales vigentesen el estado, con la participación interactiva de los actores de la comunidad educativa: alumnos, académicos, investigadores, colegios de profesionales, operarios del derecho, entre otros. Generando certeza jurídica, convivencia social y desarrollo integral profesional y humano.</span>
                <span>El prestigio, la experiencia y el conocimiento del personal académico, contribuye a la formación profesional de calidad de los futuros licenciados en Derecho, y al estudio y práctica de la justicia desde una perspectiva humana, que se enfoque a la búsqueda de la verdad histórica.</span>
              </p>
          </div>
          <div className='sm:flex justify-center items-center sm:w-1024 sm:mt-10'>
            <img className='w-96' src="https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Feldjt-png.png?alt=media&token=a31fec81-e6e8-42af-a263-735b9c7cb4cb" alt="eldjt" />
            <div className='sm:flex flex-col gap-4 mt-5 sm:w-96 hidden'>
                <h3 className='text-2xl text-center'>Contáctanos</h3>
                <Input type='text' placeholder={'Nombre Completo'} required={true}/>
                <Input type='email' placeholder={'Correo Electrónico'} required={true}/>
                <Input type='tel' placeholder={'Teléfono'} required={true}/>
                <Input type='text' placeholder={'Ciudad'} required={true}/>
                <button className='mx-5 mb-5 border-LG p-2 bg-secondary rounded text-white font-bold drop-shadow'>ENVIAR</button>
            </div>
          </div>
      </div>
    </Layout>
  )
}

export default EducationalModel