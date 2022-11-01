import React from 'react'
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout'

const Bachelors = () => {

  const navigate = useNavigate();
  return (
    <Layout location='academicOffer'>
      <div className='flex flex-col mt-24 items-center justify-center w-1024 mb-14'>
            <img src="https://scontent.fvsa1-1.fna.fbcdn.net/v/t39.30808-6/308463939_521318153331186_3416367163116147944_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=eHwWhLvNpbUAX_Nd41D&_nc_ht=scontent.fvsa1-1.fna&oh=00_AT8eJgNmjcJULavxoQvUzyeE4mN5fWkCPqSzSj7gt-ltog&oe=634236A6" alt="" />
          <div className='mt-10'>
              <h1 className='text-3xl sm:text-4xl text-center'>Licenciatura en Derecho</h1>
          </div>
          <div className='sm:mt-10 mt-7'>
              <p className='flex flex-col text-justify px-8 gap-4'>
                <span>La carrera de la Licenciatura en Derecho se justifica en las necesidades institucionales de impartición de justicia de una sociedad, la necesidad y la demanda que ésta hace por profesionales capacitados para actuar en el ámbito de Derecho, con una formación que permita la inserción laboral de sus titulados al responder a las demandas generales y particulares de la sociedad.</span>
              </p>
              <h3 className='text-2xl sm:text-3xl mb-8 mt-10 text-center text-dark'>Objetivos 🎯</h3>
              <p className='flex flex-col text-justify px-8 gap-4'>
                <span>Formar estudiantes como, litigantes excelentes, juristas y servidores públicos ejemplares, para poder así transformar la sociedad, a través de una instrucción laica, democrática y basada en un profundo respeto a los derechos humanos.</span>
              </p>
              <div className='flex items-center justify-center sm:p-1 w-24 -mb-36 sm:w-auto sm:mb-0 mt-10 m-auto'>
                <iframe src="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2FELDJT%2Fvideos%2F7775553315848783%2F&show_text=false&width=560&t=0" width="560" height="317" className='' scrolling="no" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>
              </div>
              <h3 className='text-2xl sm:text-3xl mb-8 mt-10 text-center text-dark'>Perfil de ingreso 🧔‍♂️</h3>
              <p className='flex flex-col text-justify px-8 gap-4'>
                <span>Los aspirantes que tenga vocación de estudiar la carrera de Derecho, deben asumir una actitud de crítica constructiva, de liderazgo, de servicio, de flexibilidad y de empatía que se practica en la convivencia diaria en la institución, propiciando mayores capacidades para aprender y saber escuchar, conceptuar, analizar, conciliar, expresar, argumentar, trabajar en equipo y ser creativo, que conjuntadas con las habilidades intrínsecas de cada alumno, da como resultado mejores seres humanos.</span>
              </p>
              <h3 className='text-2xl sm:text-3xl mb-8 mt-10 text-center text-dark'>Perfil de egreso 👩‍🎓</h3>
              <p className='flex flex-col text-justify px-8 gap-4'>
                <span>Los egresados cuentan con una cultura académica, una cultura básica general y una cultura profesional que les permite ser ciudadanos solidarios y responsables, abiertos hacia otras culturas, capaces de apreciar los valores de la libertad, respetuosos de la dignidad humana y de sus diferencias y orientan su vida profesional con dignidad, seguridad y ética.</span>
              </p>
              <h3 className='text-2xl sm:text-3xl mb-8 mt-10 text-center text-dark'>Misión 🧠</h3>
              <p className='flex flex-col text-justify px-8 gap-4'>
                <span>Formar profesionales del Derecho, quienes haciendo honor a su origen académico y ejerciendo responsable y éticamente su profesión, contribuyan por cirtud de la justicia a la implementación de valores con profundo compromiso social y desde una perspectiva humanista.</span>
              </p>
              <h3 className='text-2xl sm:text-3xl mb-8 mt-10 text-center text-dark'>Visión 🗣️</h3>
              <p className='flex flex-col text-justify px-8 gap-4'>
                <span>Ser la institución de educación superior de mayor prestigio nacional por la formación de profesionales de Derecho con los más altos niveles de conocimientos teóricos y prácticos, que impulsen el cambio y la tranformación social y sustenten en un sistema de aprendizaje situado, conducido por académicos de reconocida y excelete trayectoria profesional.</span>
              </p>
              <h3 className='text-2xl sm:text-3xl mb-8 mt-10 text-center text-dark'>¿Cómo se integra el plan de estudios? 📚</h3>
              <p className='flex flex-col text-justify px-8 gap-4'>
                <span>El plan de estudios se conforma de seis semestres (3 años). Finalizando el sexto semestre, tendrás la opción de cursar dos semestres más para obtener el título de especialidad.</span>
              </p>
              {/* <img className='m-auto px-24 pt-10' src="https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2F83501672_550890905497463_2215515582076289024_n.jpeg?alt=media&token=3652662d-9bd4-4378-9fbb-ccfa08948d15" alt="" /> */}
              {/* <div className='flex items-center justify-center sm:p-1 w-24 -mb-36 sm:w-auto sm:mb-0 mt-10 m-auto'>
                <iframe src="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2FELDJT%2Fvideos%2F7775553315848783%2F&show_text=false&width=560&t=0" width="560" height="317" className='' scrolling="no" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>
              </div> */}
              <div className='hover:scale-105 transition cursor-pointer' onClick={() => navigate('/admisiones')}>
                <h2 className='text-3xl text-dark text-center mt-10'>👉 ¡Toma ya la decisión correcta!</h2>
                <h5 className=' text-dark text-center '>No esperes más ⏳</h5>
              </div>
          </div>
      </div>
    </Layout>
  )
}

export default Bachelors