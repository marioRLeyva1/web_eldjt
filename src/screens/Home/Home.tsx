import React, { useEffect } from 'react'
import MobileHeader from '../../components/MobileHeader/MobileHeader'
import Arrow from '../../icons/arraow.svg'
import Magistrate from '../../icons/magistrate.svg'
import Flexibility from '../../icons/work-schedule.svg'
import EmblaCarousel from '../../components/EmblaCarousel/EmblaCarousel'

const Home = () => {

    const MOBILE_SLIDES = [
        {key: 0, url: 'https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/home-carousel%2F0-mobile.png?alt=media&token=19e67585-5fd3-420d-b2fc-85abe7ebdc05', button: true, buttonLabel: 'INICIA YA', buttonTop: 'top-80', buttonRef: ''},
        {key: 1, url: 'https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/home-carousel%2F1-mobile.png?alt=media&token=6a66360c-4af2-41c1-9435-af9bdd5e3562', button: true, buttonLabel: 'CONOCE MÁS', buttonTop: 'top-72', buttonRef: ''}
    ];

    const [menuTransparent, setMenuTransparent] = React.useState(false);

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
    }, []);

    const listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
      
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      
        const scrolled = winScroll / height

        if (scrolled > 0.20) {
          setMenuTransparent(true);
        }
        if (scrolled === 0) {
          setMenuTransparent(false);
        }
        console.log('scrolled', scrolled);
        
    };
    
  return (
    <div className='flex items-center justify-center'>
      <div className='sm:flex sm:flex-col sm:items-center sm:justify-center sm:w-1024'>
        <div className='sm:hidden fixed w-full top-0 z-50'> 
            <MobileHeader menuTransparent={menuTransparent}/>
        </div>
        <div className={`flex flex-col bg-white`}>
            <EmblaCarousel slides={MOBILE_SLIDES}/>
            {/* <img src={'https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Feldjt-png.png?alt=media&token=a31fec81-e6e8-42af-a263-735b9c7cb4cb'} alt="eldjt" className='h-96 w-full object-contain mt-4'/> */}
            {/* <h4 className='font-bold px-14 text-center text-md mb-4'>
                <span>Inscríbete durante este mes y obtén </span>
                <span className='text-secondary'>40% </span>
                <span>de descuento</span>
            </h4> */}
            <div className='h-full sm:w-full'>
                <h2 className='flex flex-col items-center text-4xl mt-2 font-thin text-dark mb-5 sm:flex-row sm:gap-2 sm:items-center sm:justify-center'>
                    <span>Oferta</span>
                    <span>Académica</span>
                </h2>
                <div className='sm:flex sm:flex-row sm:w-full sm:justify-center sm:items-baseline flex flex-col gap-4 sm:gap-0'>
                    <div className={`flex items-center justify-center sm:w-7/12 sm:h-96 transition hover:scale-105 sm:ml-5`}>
                        <div className='flex flex-col items-center justify-center w-10/12 h-auto border-2 rounded-lg shadow-md bg-slate-50'>
                            <img src='https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Fjavier-trueba-iQPr1XkF5F0-unsplash%20(1).jpg?alt=media&token=f8c5ff0b-a125-4cbb-8659-9a888cf8baf4' alt="graduation-cap" className='rounded-t-lg w-full object-cover h-48'/>
                            <h5 className='text-2xl pt-3 text-dark '>Licenciaturas</h5>
                            <p className='text-sm sm:text-lg px-10 mt-1 text-center sm:py-1'>Inicia un mundo lleno de posibilidades.</p>
                            <button className='flex items-center justify-center text-xs border-2 rounded px-3 py-1 mt-1 mb-3 bg-secondary text-white shadow sm:text-base sm:rounded-lg '>
                                <p>MÁS INFORMACIÓN</p>
                                <img src={Arrow} alt="arrow" className='-rotate-90 w-4'/>
                            </button>
                        </div>
                    </div>
                    <div className={`flex items-center justify-center sm:w-7/12 sm:h-96 transition hover:scale-105 sm:mr-5`}>
                        <div className='flex flex-col items-center justify-center w-10/12 h-auto border-2 rounded-lg shadow-md bg-slate-50'>
                            <img src='https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Fjavier-trueba-iQPr1XkF5F0-unsplash%20(1).jpg?alt=media&token=f8c5ff0b-a125-4cbb-8659-9a888cf8baf4' alt="graduation-cap" className='rounded-t-lg w-full object-cover h-48'/>
                            <h5 className='text-2xl pt-3 text-dark '>Posgrados</h5>
                            <p className='text-sm sm:text-lg px-10 mt-1 text-center sm:py-1'>Expande tus límites.</p>
                            <button className='flex items-center justify-center text-xs border-2 rounded px-3 py-1 mt-1 mb-3 bg-secondary text-white shadow sm:text-base sm:rounded-lg '>
                                <p>MÁS INFORMACIÓN</p>
                                <img src={Arrow} alt="arrow" className='-rotate-90 w-4'/>
                            </button>
                        </div>
                    </div>
                </div>
                {/* <div className='text-dark text-2xl font-thin flex flex-col gap-14 items-center justify-center mt-10'>
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
                </div> */}
            </div>
            <div className='h-full bg-white flex flex-col items-center'>
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
</div>
  )
}

export default Home