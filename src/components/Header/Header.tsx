import React, { useEffect } from 'react'
import { useLocation, useNavigate} from 'react-router-dom';

const Header = (props:any) => {

    const [subMenuOpen, setSubMenuOpen] = React.useState({
        us: false,
        academicOffer: false,
        admissions: false,
        services: false
    });

    const [bachelorsMenu, setBachelorsMenu] = React.useState(false);
    const [experienceMenu, setExperienceMenu] = React.useState(false);
    const [postgraduateMenu, setPostraduateMenu] = React.useState(false);

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
    }, [props.loadedSlider, path.pathname]);

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
    }, [props.location])

    const onHandleClick = (e:any) => {
        
        if (e.target.id === 'us') {
            setSubMenuOpen({
                us: !subMenuOpen.us,
                academicOffer: false,
                admissions: false,
                services: false
            })
            setBachelorsMenu(false);
            setExperienceMenu(false);
            setPostraduateMenu(false);
        }
        if (e.target.id === 'academicOffer') {
            setSubMenuOpen({
                us: false,
                academicOffer: !subMenuOpen.academicOffer,
                admissions: false,
                services: false
            })
            setBachelorsMenu(false);
            setExperienceMenu(false);
            setPostraduateMenu(false);
        }
        if (e.target.id === 'admissions') {
            setSubMenuOpen({
                us: false,
                academicOffer: false,
                admissions: !subMenuOpen.admissions,
                services: false
            })
            setBachelorsMenu(false);
            setExperienceMenu(false);
            setPostraduateMenu(false);
        }
        if (e.target.id === 'services') {
            setSubMenuOpen({
                us: false,
                academicOffer: false,
                admissions: false,
                services: !subMenuOpen.services
            })
            setBachelorsMenu(false);
            setExperienceMenu(false);
            setPostraduateMenu(false);
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
            case 'Derecho':
                navigate('/licenciatura')
                break;
            case 'Licenciatura':
                setBachelorsMenu(!bachelorsMenu);
                setExperienceMenu(false);
                setPostraduateMenu(false);
                break;
            case 'Licenciatura por experiencia laboral':
                setBachelorsMenu(false);
                setExperienceMenu(!experienceMenu);
                setPostraduateMenu(false);
                break;
            case 'Posgrados':
                setBachelorsMenu(false);
                setExperienceMenu(false);
                setPostraduateMenu(!postgraduateMenu);
                break;
            case 'Prepa':
                navigate('/prepa')
                break;
            case 'Proceso de admisión 2023':
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
                    <li><p className={`hover:text-secondary ${location.home && 'text-secondary'} cursor-pointer`}  onClick={(e) => onHandleMenuClick(e)}>Inicio</p></li>
                </li>
                <li>
                    <p className={`hover:text-secondary ${location.us && 'text-secondary'} cursor-pointer`} id='us' onClick={(e) => onHandleClick(e)}>Nosotros</p>
                    <ul className={`mt-5 drop-shadow-xl w-72 bg-slate-50 p-2 rounded-lg ${subMenuOpen.us ? 'absolute' : 'hidden'}`}>
                        <li className='my-1'><p className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Historia</p></li>
                        {/* <li className='my-1'><p className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Modelo Educativo</p></li> */}
                        <li className='my-1'><p className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Calendario Institucional</p></li>
                    </ul>
                </li>
                <li>
                    <p className={`hover:text-secondary ${location.academicOffer && 'text-secondary'} cursor-pointer`} id='academicOffer' onClick={(e) => onHandleClick(e)}>Oferta Académica</p>
                    <ul className={`mt-5 shadow-lg w-96 bg-slate-50 p-2 rounded-lg ${subMenuOpen.academicOffer ? 'absolute' : 'hidden'}`}>
                        <li className='my-1'><p className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Bachillerato</p></li>
                        <li className='my-1'><p className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Licenciatura</p></li>
                        <li className='my-1'><p className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Licenciatura por experiencia laboral</p></li>
                        <li className='my-1'><p className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Posgrados</p></li>
                    </ul>
                    <ul className={`mt-5 ml-96 shadow-lg w-96 bg-slate-50 p-2 rounded-lg ${bachelorsMenu ? 'absolute' : 'hidden'}`}>
                        <li className='my-1'><p className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Derecho</p></li>
                        <li className='my-1'>
                            <p className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>
                                Contaduría
                                <span className=" ml-4 inline-flex items-center rounded-full bg-secondary px-2 py-1 text-xs font-medium text-white">
                                    Próximamente
                                </span>
                            </p>
                        </li>
                        <li className='my-1'>
                        <p className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>
                                Administración
                                <span className=" ml-4 inline-flex items-center rounded-full bg-secondary px-2 py-1 text-xs font-medium text-white">
                                    Próximamente
                                </span>
                            </p>
                        </li>
                    </ul>
                    <ul className={`mt-5 ml-96 shadow-lg w-96 bg-slate-50 p-2 rounded-lg ${experienceMenu ? 'absolute' : 'hidden'}`}>
                        <li className='my-1'><p className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Pedagogía</p></li>
                        <li className='my-1'><p className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Administración</p></li>
                    </ul>
                    <ul className={`mt-5 ml-96 shadow-lg w-96 bg-slate-50 p-2 rounded-lg ${postgraduateMenu ? 'absolute' : 'hidden'}`}>
                        <li className='my-1'>
                            <p className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>
                                Maestrías
                                <span className=" ml-4 inline-flex items-center rounded-full bg-secondary px-2 py-1 text-xs font-medium text-white">
                                    Próximamente
                                </span>
                            </p>
                        </li>
                        <li className='my-1'>
                        <p className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>
                                Doctorados
                                <span className=" ml-4 inline-flex items-center rounded-full bg-secondary px-2 py-1 text-xs font-medium text-white">
                                    Próximamente
                                </span>
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <p className={`hover:text-secondary ${location.admissions && 'text-secondary'} cursor-pointer`} id='admissions' onClick={(e) => onHandleClick(e)}>Admisiones</p>
                    <ul className={`mt-5 shadow-lg w-72 bg-slate-50 p-2 rounded-lg ${subMenuOpen.admissions ? 'absolute' : 'hidden'}`}>
                        <li className='my-1'><p className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Proceso de admisión 2023</p></li>
                        <li className='my-1'><p className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Becas</p></li>
                    </ul>
                </li>
                <li>
                    <p className={`hover:text-secondary ${location.services && 'text-secondary'} cursor-pointer`}  id='services' onClick={(e) => onHandleClick(e)}>Servicios</p>
                    <ul className={`mt-5 shadow-lg w-64 bg-slate-50 p-2 rounded-lg ${subMenuOpen.services ? 'absolute' : 'hidden'}`}>
                        <li className='my-1'><p className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Clases en línea</p></li>
                        {/* <li className='my-1'><p className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Vinculación</p></li> */}
                        <li className='my-1'><p className='hover:text-secondary cursor-pointer' onClick={(e) => onHandleMenuClick(e)}>Pago en línea</p></li>
                    </ul>
                </li>
                <li><p className={`hover:text-secondary ${location.news && 'text-secondary'} cursor-pointer`} onClick={(e) => onHandleMenuClick(e)}>Noticias</p></li>
                <li><p className={`hover:text-secondary ${location.graduate && 'text-secondary'} cursor-pointer`}  onClick={(e) => onHandleMenuClick(e)}>Egresados</p></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header