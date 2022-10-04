import React from 'react'
import Layout from '../../components/Layout/Layout'
import Input from '../../components/Input/Input'
import { useNavigate } from 'react-router-dom';

const History = () => {
  const navigate = useNavigate();
  return (
    <Layout location='us'>
      <div className='flex flex-col mt-24 items-center justify-center w-1024 mb-4'>
          <div className=''>
              <h1 className='text-3xl sm:text-5xl'>Historia</h1>
          </div>
          {/* <div className='hidden sm:block w-16'>
            <img src="https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Feldjt-png.png?alt=media&token=a31fec81-e6e8-42af-a263-735b9c7cb4cb" alt="eldjt" />
          </div> */}
          <div className='sm:mt-10 mt-7 '>
              <p className='flex flex-col text-justify px-8 gap-4 justify-center items-center'>
                <span>La Escuela Libre de Derecho y Jurisprudencia de Tabasco, es una Institución de Educación Superior Especializada en la impartición y generación del conocimiento de las Ciencias Jurídicas.</span>
          <br />
          <div className='flex items-center justify-center sm:p-1 w-24 -mb-36 sm:w-auto sm:mb-0'>
            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FELDJT%2Fvideos%2F1277489543058574%2F&show_text=false&width=560&t=0" width="560" height="314"  scrolling="no"  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>
          </div>
          <br />
                <span>La excelencia de su proceso educativo se obtiene a través del aprendizaje situado que permite atender y responder a los problemas sociales vigentesen el estado, con la participación interactiva de los actores de la comunidad educativa: alumnos, académicos, investigadores, colegios de profesionales, operarios del derecho, entre otros. Generando certeza jurídica, convivencia social y desarrollo integral profesional y humano.</span>
                <span>El prestigio, la experiencia y el conocimiento del personal académico, contribuye a la formación profesional de calidad de los futuros licenciados en Derecho, y al estudio y práctica de la justicia desde una perspectiva humana, que se enfoque a la búsqueda de la verdad histórica.</span>
              </p>
              <div className='hover:scale-105 transition cursor-pointer' onClick={() => navigate('/admisiones')}>
                <h2 className='text-3xl text-dark text-center mt-10'>👉 ¡Toma ya la decisión correcta!</h2>
                <h5 className=' text-dark text-center '>No esperes más ⏳</h5>
              </div>
          </div>
      </div>
    </Layout>
  )
}

export default History