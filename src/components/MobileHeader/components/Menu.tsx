import React from 'react'
import Arrow from '../../../icons/arraow-menu.svg'
import { useNavigate } from 'react-router-dom';

export const Menu = (props: any) => {

    const { open } = props;
    const navigate = useNavigate();

    const [menuSections, setMenuSections] = React.useState({
        us: false,
        academicOffer: false,
        admissions: false,
        services: false
    })

    const onHandleMenu = (e: any) => {
        console.log(e.target.id);
        if (e.target.id === 'us') {
            setMenuSections({...menuSections, us: !menuSections.us})
        }
        if (e.target.id === 'academicOffer') {
            setMenuSections({...menuSections, academicOffer: !menuSections.academicOffer})
        }
        if (e.target.id === 'admissions') {
            setMenuSections({...menuSections, admissions: !menuSections.admissions})
        }
        if (e.target.id === 'services') {
            setMenuSections({...menuSections, services: !menuSections.services})
        } 
    };

    const onHandleMenuClick = (e:any) => {
        const {target: {innerHTML}} = e;
        props.onCloseMenu();
        console.log(innerHTML);
        
        switch (innerHTML) {
            case 'Inicio':
                navigate('/')
                break;
            case 'Historia':
                navigate('/nosotros/historia')
                break;
            case 'Modelo Educativo':
                navigate('/nosotros/modelo-educativo')
                break;
            case 'Calendario Institucional':
                navigate('/nosotros/calendario-institucional')
                break;
            case 'Licenciatura':
                navigate('/licenciatura')
                break;
            case 'Posgrados':
                navigate('/posgrados')
                break;
            case 'Prepa':
                navigate('/prepa')
                break;
            case 'Proceso de admisión 2022':
                navigate('/admisiones')
                break;
            case 'Becas':
                navigate('/becas')
                break;
            case 'Clases en línea':
                navigate('/clases-online')
                break;
            case 'Vinculación':
                navigate('/vinculacion')
                break;
            case 'Pago en línea':
                navigate('/pago')
                break;
            case 'Noticias':
                navigate('/noticias')
                break;
            case 'Egresados':
                navigate('/egresados')
                break;
            default:
                break;
        }
    }

  return (
    <div className='static'>
        <nav className={`shadow-xl h-full w-80 bg-white fixed top-20 -right-80 z-50 ${open ? 'transition-all duration-500 -translate-x-80' : 'transition-all duration-500 -right-80'}`}>
            <section className='mt-2'>
                <div id='index' className='border-b-2 border-light flex justify-between h-9 mt-4 active:bg-slate-400'  onClick={(e) => onHandleMenuClick(e)}>
                    <p id='index' className='text-blacktext-lg pl-6'>Inicio</p>
                </div>
            </section>
            <section className='mt-2'>
                <div id='us' className='border-b-2 border-light flex justify-between h-9 z-50 mt-4' onClick={(e) => onHandleMenu(e)}>
                    <p id='us' className='text-blacktext-lg pl-6'>Nosotros</p>
                    <img id='us' src={Arrow} alt="arrow" className={`w-6 h-6 mr-4 ${menuSections.us ? 'transition-all duration-500 rotate-180' : 'transition-all duration-500'}`}/>
                </div>
                <div className={`text-blackgap-2 mt-2 ${menuSections.us ? 'transition-all duration-500 visible flex flex-col' : 'transition-all duration-1000 hidden'}`}>
                    <p className='pl-8 pt-2 active:bg-slate-400' onClick={(e) => onHandleMenuClick(e)}>Historia</p>
                    {/* <p className='pl-8 pt-2 active:bg-slate-400' onClick={(e) => onHandleMenuClick(e)}>Modelo Educativo</p> */}
                    <p className='pl-8 pt-2 active:bg-slate-400' onClick={(e) => onHandleMenuClick(e)}>Calendario Institucional</p>
                </div>
            </section>
            <section className='mt-2'>
                <div id='academicOffer' className='border-b-2 border-light flex justify-between h-9 mt-4' onClick={(e) => onHandleMenu(e)}>
                    <p id='academicOffer' className='text-blacktext-lg pl-6'>Oferta Académica</p>
                    <img id='academicOffer' src={Arrow} alt="arrow" className={`w-6 h-6 mr-4 ${menuSections.academicOffer ? 'transition-all duration-500 rotate-180' : 'transition-all duration-500'}`}/>
                </div>
                <div className={`text-blackgap-2 mt-2 ${menuSections.academicOffer ? 'transition-all duration-500 visible flex flex-col' : 'transition-all duration-500 hidden'}`}>
                    {/* <p className='pl-8 pt-2 active:bg-slate-400' onClick={(e) => onHandleMenuClick(e)}>Prepa</p> */}
                    <p className='pl-8 pt-2 active:bg-slate-400' onClick={(e) => onHandleMenuClick(e)}>Licenciatura</p>
                    {/* <p className='pl-8 pt-2 active:bg-slate-400' onClick={(e) => onHandleMenuClick(e)}>Postgrados</p> */}
                </div>
            </section>
            <section className='mt-2'>
                <div id='admissions' className='border-b-2 border-light flex justify-between h-9 mt-4' onClick={(e) => onHandleMenu(e)}>
                    <p id='admissions' className='text-blacktext-lg pl-6'>Admisiones</p>
                    <img id='admissions' src={Arrow} alt="arrow" className={`w-6 h-6 mr-4 ${menuSections.admissions ? 'transition-all duration-500 rotate-180' : 'transition-all duration-500'}`}/>
                </div>
                <div className={`text-blackgap-2 mt-2 ${menuSections.admissions ? 'transition-all duration-500 visible flex flex-col' : 'transition-all duration-500 hidden'}`}>
                    <p className='pl-8 pt-2 active:bg-slate-400' onClick={(e) => onHandleMenuClick(e)}>Proceso de admisión 2022</p>
                    <p className='pl-8 pt-2 active:bg-slate-400' onClick={(e) => onHandleMenuClick(e)}>Becas</p>
                </div>
            </section>
            <section className='mt-2'>
                <div id='services' className='border-b-2 border-light flex justify-between h-9 mt-4' onClick={(e) => onHandleMenu(e)}>
                    <p id='services' className='text-blacktext-lg pl-6'>Servicios</p>
                    <img id='services' src={Arrow} alt="arrow" className={`w-6 h-6 mr-4 ${menuSections.services ? 'transition-all duration-500 rotate-180' : 'transition-all duration-500'}`}/>
                </div>
                <div className={`text-blackgap-2 mt-2 ${menuSections.services ? 'transition-all duration-500 visible flex flex-col' : 'transition-all duration-500 hidden'}`}>
                    <p className='pl-8 pt-2 active:bg-slate-400' onClick={(e) => onHandleMenuClick(e)}>Clases en línea</p>
                    {/* <p className='pl-8 pt-2 active:bg-slate-400' onClick={(e) => onHandleMenuClick(e)}>Vinculación</p> */}
                    <p className='pl-8 pt-2 active:bg-slate-400' onClick={(e) => onHandleMenuClick(e)}>Pago en línea</p>
                </div>
            </section>
            <section className='mt-2'>
                <div id='news' className='border-b-2 border-light flex justify-between h-9 mt-4 active:bg-slate-400'  onClick={(e) => onHandleMenuClick(e)}>
                    <p id='news' className='text-blacktext-lg pl-6'>Noticias</p>
                </div>
            </section>
            <section className='mt-2'>
                <div id='graduates' className='border-b-2 border-light flex justify-between h-9 mt-4 active:bg-slate-400'  onClick={(e) => onHandleMenuClick(e)}>
                    <p id='graduates' className='text-blacktext-lg pl-6'>Egresados</p>
                </div>
            </section>
        </nav>
    </div>
  )
}
