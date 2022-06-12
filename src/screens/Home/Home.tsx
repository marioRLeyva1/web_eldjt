import React, { useEffect } from 'react'
import MobileHeader from '../../components/MobileHeader/MobileHeader'
import MobileSlider from './components/MobileSlider'
import Magistrate from '../../icons/magistrate.svg'
import Flexibility from '../../icons/work-schedule.svg'
import EmblaCarousel from '../../components/EmblaCarousel/EmblaCarousel'

const Home = () => {

    const MOBILE_SLIDES = [
        {key: 1, url: 'https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/home-carousel%2F1-mobile.png?alt=media&token=f518073a-8fc9-45dd-bca1-68430759f211'},
        {key: 2, url: 'https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/home-carousel%2F2-mobile.png?alt=media&token=293f1c89-fdc7-4f63-b121-153f0b2c9898'},
        {key: 3, url: 'https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/home-carousel%2F3-mobile.png?alt=media&token=ce94d0be-70d9-44a6-b18f-56c6c8a49f26'}
    ]
    
  return (
      <div className=''>
        <div className='sm:hidden fixed w-full top-0 z-50'>
            <MobileHeader/>
        </div>
        <div className='flex flex-col bg-light mt-20 '>
            <EmblaCarousel slides={MOBILE_SLIDES}/>
            {/* <img src={'https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Feldjt-png.png?alt=media&token=a31fec81-e6e8-42af-a263-735b9c7cb4cb'} alt="eldjt" className='h-96 w-full object-contain mt-4'/> */}
            {/* <h4 className='font-bold px-14 text-center text-md mb-4'>
                <span>Inscríbete durante este mes y obtén </span>
                <span className='text-secondary'>40% </span>
                <span>de descuento</span>
            </h4> */}
            <div className='h-full'>
                <h2 className='flex flex-col items-center text-4xl mt-4 font-thin text-dark'>
                    <span>Oferta</span>
                    <span>Académica</span>
                </h2>
                <div className='text-dark text-2xl font-thin flex flex-col gap-14 items-center justify-center mt-10'>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={Magistrate} alt="graduation-cap" className='h-20 w-24'/>
                        <h5>Licenciaturas</h5>
                        <p className='text-sm px-10 mt-4 text-center'>Inicia un mundo lleno de posibilidades estudiando alguna de nuestras licenciaturas.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={Magistrate} alt="graduation-cap" className='h-20 w-24'/>
                        <h5>Postgrados</h5>
                        <p className='text-sm px-10 mt-4 text-center pb-7'>¿Estás listo para el siguiente nivel? Nosotros también. Estudia alguna de nuestras maestrías.</p>
                    </div>
                </div>
            </div>
            <div className='h-full bg-light flex flex-col items-center'>
                <h2 className='flex flex-col items-center text-4xl mt-4 font-thin text-dark'>
                    <span>¿Por qué</span>
                    <span className='text-extra'>elegirnos?</span>
                </h2>
                <p className='text-justify px-6 mt-4'>
                    <span>Somos la </span>
                    <span className='font-semibold text-primary'>institución </span>
                    <span>de educación superior con </span>
                    <span className='font-semibold text-primary'>mayor </span>
                    <span>crecimiento del sureste. </span>
                    <span>De nuestras aulas egresan los nuevos </span>
                    <span className='font-semibold text-primary'>líderes </span>
                    <span>de la industria. </span>
                    <span>Egresar de alguno de nuestros programas educativos asegura el </span>
                    <span className='font-semibold text-primary'>éxito </span>
                    <span>de tu carrera. </span>
                    <span>¿Estás </span>
                    <span className='font-semibold text-primary'>listo</span>
                    <span>?</span>
                </p>
                <h5 className='mt-7 text-xl font-thin'>
                    <span>¿Qué te </span>
                    <span className='font-semibold text-extra'>ofremos</span>
                    <span>?</span>
                </h5>
                <img src={Flexibility} alt="flexibility" className='w-20 mt-4'/>
                <p className='text-center px-16 mt-4'>
                    <span>Flexibilidad para </span>
                    <span className='font-semibold text-primary'>estudiar </span>
                    <span>a tu ritmo. De forma prescencial o </span>
                    <span className='font-semibold text-primary'>semi-presencial</span>
                    <span>.</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Home