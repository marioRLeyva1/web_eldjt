import React, { useEffect, useRef } from 'react'
import MobileHeader from '../../components/MobileHeader/MobileHeader'
import Arrow from '../../icons/arraow.svg'
import Calendar from '../../icons/calendar.svg'
import Stats from '../../icons/stats.svg'
import Users from '../../icons/users.svg'
import EmblaCarousel from '../../components/EmblaCarousel/EmblaCarousel'
import GenericCarousel from '../../components/GenericCarousel/GenericCarousel'
import Card from '../../components/Card/Card'
import Input from '../../components/Input/Input'
import Footer from '../../Footer/Footer'
import { useSpring, animated } from 'react-spring'
import useOnScreen from '../../hooks/useOnSreen'

const Home = () => {



    const MOBILE_SLIDES = [
        {key: 0, url: 'https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/home-carousel%2F0-mobile.png?alt=media&token=19e67585-5fd3-420d-b2fc-85abe7ebdc05', button: true, buttonLabel: 'INICIA YA', buttonTop: 'top-80', buttonRef: ''},
        {key: 1, url: 'https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/home-carousel%2F1-mobile.png?alt=media&token=6a66360c-4af2-41c1-9435-af9bdd5e3562', button: true, buttonLabel: 'CONOCE MÁS', buttonTop: 'top-72', buttonRef: ''}
    ];

    const NEWS = [
        {id: 0, title: 'Título 1. Gran noticia', subtitle: 'Aquí va una pequeña descripción de la nota', img: 'https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Fdom-fou-YRMWVcdyhmI-unsplash%20(1).jpg?alt=media&token=4bb3c145-10ce-4119-8b75-61ef1d1d42e8'},
        {id: 1, title: 'Título 2. Gran noticia', subtitle: 'Aquí va una pequeña descripción de la nota', img: 'https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Fdom-fou-YRMWVcdyhmI-unsplash%20(1).jpg?alt=media&token=4bb3c145-10ce-4119-8b75-61ef1d1d42e8'},
        {id: 2, title: 'Título 1. Gran noticia', subtitle: 'Aquí va una pequeña descripción de la nota', img: 'https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Fdom-fou-YRMWVcdyhmI-unsplash%20(1).jpg?alt=media&token=4bb3c145-10ce-4119-8b75-61ef1d1d42e8'},
        {id: 3, title: 'Título 2. Gran noticia', subtitle: 'Aquí va una pequeña descripción de la nota', img: 'https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Fdom-fou-YRMWVcdyhmI-unsplash%20(1).jpg?alt=media&token=4bb3c145-10ce-4119-8b75-61ef1d1d42e8'},
        {id: 3, title: 'Título 2. Gran noticia', subtitle: 'Aquí va una pequeña descripción de la nota. Descripción de dobles renglón.', img: 'https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Fdom-fou-YRMWVcdyhmI-unsplash%20(1).jpg?alt=media&token=4bb3c145-10ce-4119-8b75-61ef1d1d42e8'},
    ]

    const [menuTransparent, setMenuTransparent] = React.useState(false);
    const [sliderLoaded, setSliderLoaded] = React.useState(false);

    const ChooseUs = useRef(null)
    const isVisibleChooseUs = useOnScreen(ChooseUs)

    const contact = useRef(null)
    const isVisibleContact = useOnScreen(contact)

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

        if (scrolled > 0) {
          setMenuTransparent(true);
        }
        if (scrolled === 0) {
          setMenuTransparent(false);
        }
        // console.log('scrolled', scrolled);
        
    };

    const onLoadedSlider = () => {
        setSliderLoaded(true);
    };
    
  return (
    <div className='flex items-center justify-center bg-black font-poppins'>
      <div className={`sm:flex sm:flex-col sm:items-center sm:justify-center w-full sm:w-full mt-20 sm:mt-0`}>
        <div className='sm:hidden fixed w-full top-0 z-50'> 
            <MobileHeader menuTransparent={menuTransparent}/>
        </div>
        <div className={`flex flex-col bg-white w-full`}>
            <EmblaCarousel slides={MOBILE_SLIDES} onLoadedSlider={onLoadedSlider}/>
            {/* <img src={'https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Feldjt-png.png?alt=media&token=a31fec81-e6e8-42af-a263-735b9c7cb4cb'} alt="eldjt" className='h-96 w-full object-contain mt-4'/> */}
            {/* <h4 className='font-bold px-14 text-center text-md mb-4'>
                <span>Inscríbete durante este mes y obtén </span>
                <span className='text-secondary'>40% </span>
                <span>de descuento</span>
            </h4> */}
            <div className={`h-full w-full ${!sliderLoaded ? 'mt-96' : ''}`}>
                <h2 className='flex flex-col items-center text-4xl font-semibold text-dark mb-5 sm:flex-row sm:gap-2 sm:items-center sm:justify-center'>
                    <span>Oferta</span>
                    <span>académica</span>
                </h2>
                <div className='sm:flex items-center justify-center sm:w-full'>
                    <div className='sm:flex sm:flex-row sm:w-full sm:justify-center sm:items-baseline flex flex-col gap-4 sm:gap-0'>
                        <div className={`flex items-center justify-center sm:w-4/12 sm:h-96 transition hover:scale-105 sm:ml-5`}>
                            <div className='flex flex-col items-center justify-center w-10/12 h-auto border-1 rounded-lg shadow-md bg-slate-50'>
                                <img src='https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Fjavier-trueba-iQPr1XkF5F0-unsplash%20(1).jpg?alt=media&token=f8c5ff0b-a125-4cbb-8659-9a888cf8baf4' alt="graduation-cap" className='rounded-t-lg w-full object-cover h-48 object-top'/>
                                <h5 className='text-2xl pt-3 text-dark '>Licenciaturas</h5>
                                <p className='text-sm sm:text-lg px-10 mt-1 text-center sm:py-1'>Inicia un mundo lleno de posibilidades.</p>
                                <button className='flex items-center justify-center text-xs border-2 rounded px-3 py-1 mt-1 mb-3 bg-secondary text-white shadow sm:text-base sm:rounded-lg'>
                                    <p>MÁS INFORMACIÓN</p>
                                    <img src={Arrow} alt="arrow" className='-rotate-90 w-4'/>
                                </button>
                            </div>
                        </div>
                        <div className={`flex items-center justify-center sm:w-4/12 sm:h-96 transition hover:scale-105 sm:mr-5`}>
                            <div className='flex flex-col items-center justify-center w-10/12 h-auto border-1 rounded-lg shadow-md bg-slate-50'>
                                <img src='https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Fdom-fou-YRMWVcdyhmI-unsplash%20(1).jpg?alt=media&token=4bb3c145-10ce-4119-8b75-61ef1d1d42e8' alt="graduation-cap" className='rounded-t-lg w-full object-cover h-48'/>
                                <h5 className='text-2xl pt-3 text-dark '>Posgrados</h5>
                                <p className='text-sm sm:text-lg px-10 mt-1 text-center sm:py-1'>Expande tus límites.</p>
                                <button className='flex items-center justify-center text-xs border-2 rounded px-3 py-1 mt-1 mb-3 bg-secondary text-white shadow sm:text-base sm:rounded-lg '>
                                    <p>MÁS INFORMACIÓN</p>
                                    <img src={Arrow} alt="arrow" className='-rotate-90 w-4'/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='text-dark text-2xl font-semibold flex flex-col gap-14 items-center justify-center mt-10'>
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
            <div className={`relative h-full flex flex-col items-center mt-5 bg-white w-full ${isVisibleChooseUs ? 'transition-all duration-1000 left-0' : '-left-1/3'}`} ref={ChooseUs}>
                <h2 className='flex flex-col items-center text-4xl mt-4 font-semibold text-black sm:flex-row sm:gap-3'>
                    <span>¿Por qué</span>
                    <span className='text-secondary'>elegirnos?</span>
                </h2>
                <p className='text-justify sm:text-center text-black px-6 mt-4 sm:w-1024'>
                    <span>Somos la </span>
                    <span className='font-semibold text-secondary'>institución </span>
                    <span>de educación superior con </span>
                    <span className='font-semibold text-secondary'>mayor </span>
                    <span>crecimiento del sureste. </span>
                    <span>De nuestras aulas egresan los nuevos </span>
                    <span className='font-semibold text-secondary'>líderes </span>
                    <span>de la industria. </span>
                    <span>Egresar de alguno de nuestros programas educativos asegura el </span>
                    <span className='font-semibold text-secondary'>éxito </span>
                    <span>de tu carrera. </span>
                    <span>¿Estás </span>
                    <span className='font-semibold text-secondary'>listo</span>
                    <span>?</span>
                </p>
                <h5 className='mt-7 text-black text-xl font-semibold'>
                    <span>¿Qué te </span>
                    <span className='font-semibold text-secondary'>ofremos</span>
                    <span>?</span>
                </h5>
                <div className='sm:flex sm:w-1024'>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={Calendar} alt="flexibility" className='w-20 mt-6'/>
                        <p className='text-center text-black px-16 mt-4'>
                            <span className='font-semibold text-secondary'>Flexbilidad </span>
                            <span>para estudiar a </span>
                            <span>a tu ritmo. De forma escolarizada o </span>
                            <span className='font-semibold text-secondary'>mixta</span>
                            <span>.</span>
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={Stats} alt="flexibility" className='w-20 mt-6'/>
                        <p className='text-center text-black px-16 mt-4'>
                            <span>Sistema de </span>
                            <span className='font-semibold text-secondary'>becas </span>
                            <span>para que puedas desarrollarte sin </span>
                            <span className='font-semibold text-secondary'>preocupaciones</span>
                            <span>.</span>
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={Users} alt="flexibility" className='w-20 mt-6'/>
                        <p className='text-center text-black px-16 mt-4 mb-4'>
                            <span>Redes de </span>
                            <span className='font-semibold text-secondary'>profesionistas </span>
                            <span>que te ayudarán a ser el </span>
                            <span className='font-semibold text-secondary'>mejor abogad@</span>
                            <span>.</span>
                        </p>
                    </div>
                </div>
            </div>
            <h2 className='flex flex-col items-center text-4xl mt-4 font-semibold text-black'>
                <span>Noticias</span>
            </h2>
            <div className='w-full'>
                {/* <div className='flex flex-col items-center justify-center sm:flex sm:w-auto sm:flex-row sm:flex-nowrap sm:overflow-hidden'>
                    {NEWS.map(item => 
                        <Card title={item.title} subtitle={item.subtitle} img={item.img} id={item.id}/>   
                    )}
                </div> */}
                <GenericCarousel slides={MOBILE_SLIDES}>
                    {NEWS.map(item => 
                        <Card title={item.title} subtitle={item.subtitle} img={item.img} id={item.id}/>   
                    )}
                </GenericCarousel>
            </div>
            <h2 className='flex flex-col items-center text-4xl mt-4 font-semibold text-black'>
                <span>Contacto</span>
            </h2>
            <div ref={contact} className={`relative w-full sm:flex sm:items-center sm:justify-center`}>
                <div className='flex flex-col gap-4 mt-5'>
                    <Input type='text' placeholder={'Nombre Completo'} required={true}/>
                    <Input type='email' placeholder={'Correo Electrónico'} required={true}/>
                    <Input type='tel' placeholder={'Teléfono'} required={true}/>
                    <Input type='text' placeholder={'Ciudad'} required={true}/>
                    <button className='mx-5 mb-5 border-LG p-2 bg-secondary rounded text-white font-bold drop-shadow'>ENVIAR</button>
                </div>
                <div>
                    Mapa
                </div>
                <Footer></Footer>
            </div>
        </div>
    </div>
</div>
  )
}

export default Home