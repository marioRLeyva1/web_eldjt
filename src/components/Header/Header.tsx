import React, { useEffect } from 'react'
import { useLocation, useNavigate} from 'react-router-dom';

const Header = (props:any) => {

    const [subMenuOpen, setSubMenuOpen] = React.useState({
        us: false,
        academicOffer: false,
        admissions: false,
        services: false
    });

    const [location, setLocation] = React.useState({
        home: false,
        us: false,
        academicOffer: false,
        admissions: false,
        services: false,
        news: false,
        graduate: false
    });

    const navigate = useNavigate();
    const path = useLocation();
    const [navFadeIn, setNavFadeIn] = React.useState('-right-full');

    useEffect(() => {
        if (path.pathname === '/' && props.loadedSlider){
            setNavFadeIn('transition-all duration-1000 right-0')
            setLocation({
                home: true,
                us: false,
                academicOffer: false,
                admissions: false,
                services: false,
                news:false,
                graduate: false
            })
        }else if (path.pathname === '/' && !props.loadedSlider){
            setNavFadeIn('-right-full')
            setLocation({
                home: true,
                us: false,
                academicOffer: false,
                admissions: false,
                services: false,
                news:false,
                graduate: false
            })
        }else{
            setNavFadeIn('right-0')
        }   
    }, [props.loadedSlider]);

    useEffect(() => {
        if(props.location === 'us') {
            setLocation({
                home: false,
                us: true,
                academicOffer: false,
                admissions: false,
                services: false,
                news:false,
                graduate: false
            })
        }
        if(props.location === 'academicOffer') {
            setLocation({
                home: false,
                us: false,
                academicOffer: true,
                admissions: false,
                services: false,
                news:false,
                graduate: false
            })
        }
        if(props.location === 'admissions') {
            setLocation({
                home: false,
                us: false,
                academicOffer: false,
                admissions: true,
                services: false,
                news:false,
                graduate: false
            })
        }
        if(props.location === 'services') {
            setLocation({
                home: false,
                us: false,
                academicOffer: false,
                admissions: false,
                services: true,
                news:false,
                graduate: false
            })
        }
        if(props.location === 'news') {
            setLocation({
                home: false,
                us: false,
                academicOffer: false,
                admissions: false,
                services: false,
                news:true,
                graduate: false
            })
        }
        if(props.location === 'graduate') {
            setLocation({
                home: false,
                us: false,
                academicOffer: false,
                admissions: false,
                services: false,
                news:false,
                graduate: true
            })
        }
    }, props.location)

    const onHandleClick = (e:any) => {
        
        if (e.target.id === 'us') {
            setSubMenuOpen({
                us: !subMenuOpen.us,
                academicOffer: false,
                admissions: false,
                services: false
            })
        }
        if (e.target.id === 'academicOffer') {
            setSubMenuOpen({
                us: false,
                academicOffer: !subMenuOpen.academicOffer,
                admissions: false,
                services: false
            })
        }
        if (e.target.id === 'admissions') {
            setSubMenuOpen({
                us: false,
                academicOffer: false,
                admissions: !subMenuOpen.admissions,
                services: false
            })
        }
        if (e.target.id === 'services') {
            setSubMenuOpen({
                us: false,
                academicOffer: false,
                admissions: false,
                services: !subMenuOpen.services
            })
        } 
        
    };

    const onHandleMenuClick = (e:any) => {
        const {target: {innerHTML}} = e;
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
            case 'Licenciaturas':
                navigate('/licenciaturas')
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
    <header className={`fixed bg-slate-50 top-0 ${navFadeIn} w-full flex items-center justify-center h-16 z-50 shadow-lg rounded`}>
        <nav className='flex items-center justify-center w-1024'>
            <ul className='flex items-center w-full justify-center gap-10 text-lg'>
                <li>
                    <li><a className={`hover:text-secondary ${location.home && 'text-secondary'} cursor-pointer`}  onClick={(e) => onHandleMenuClick(e)}>Inicio</a></li>
                </li>
                <li>
                    <a className={`hover:text-secondary ${location.us && 'text-secondary'} cursor-pointer`} id='us' onClick={(e) => onHandleClick(e)}>Nosotros</a>
                    <ul className={`mt-5 drop-shadow-xl w-72 bg-slate-50 p-2 rounded-lg ${subMenuOpen.us ? 'absolute' : 'hidden'}`}>
                        <li className='my-1'><a className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Historia</a></li>
                        <li className='my-1'><a className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Modelo Educativo</a></li>
                        <li className='my-1'><a className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Calendario Institucional</a></li>
                    </ul>
                </li>
                <li>
                    <a className={`hover:text-secondary ${location.academicOffer && 'text-secondary'} cursor-pointer`} id='academicOffer' onClick={(e) => onHandleClick(e)}>Oferta Académica</a>
                    <ul className={`mt-5 shadow-lg w-72 bg-slate-50 p-2 rounded-lg ${subMenuOpen.academicOffer ? 'absolute' : 'hidden'}`}>
                        <li className='my-1'><a className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Prepa</a></li>
                        <li className='my-1'><a className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Licenciaturas</a></li>
                        <li className='my-1'><a className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Posgrados</a></li>
                    </ul>
                </li>
                <li>
                    <a className={`hover:text-secondary ${location.admissions && 'text-secondary'} cursor-pointer`} id='admissions' onClick={(e) => onHandleClick(e)}>Admisiones</a>
                    <ul className={`mt-5 shadow-lg w-72 bg-slate-50 p-2 rounded-lg ${subMenuOpen.admissions ? 'absolute' : 'hidden'}`}>
                        <li className='my-1'><a className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Proceso de admisión 2022</a></li>
                        <li className='my-1'><a className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Becas</a></li>
                    </ul>
                </li>
                <li>
                    <a className={`hover:text-secondary ${location.services && 'text-secondary'} cursor-pointer`}  id='services' onClick={(e) => onHandleClick(e)}>Servicios</a>
                    <ul className={`mt-5 shadow-lg w-72 bg-slate-50 p-2 rounded-lg ${subMenuOpen.services ? 'absolute' : 'hidden'}`}>
                        <li className='my-1'><a className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Clases en línea</a></li>
                        <li className='my-1'><a className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Vinculación</a></li>
                        <li className='my-1'><a className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Pago en línea</a></li>
                    </ul>
                </li>
                <li><a className={`hover:text-secondary ${location.news && 'text-secondary'} cursor-pointer`} onClick={(e) => onHandleMenuClick(e)}>Noticias</a></li>
                <li><a className={`hover:text-secondary ${location.graduate && 'text-secondary'} cursor-pointer`}  onClick={(e) => onHandleMenuClick(e)}>Egresados</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header