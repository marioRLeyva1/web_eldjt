import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const Header = () => {

    const [subMenuOpen, setSubMenuOpen] = React.useState({
        us: false,
        academicOffer: false,
        admissions: false,
        services: false
    });

    const location = useLocation();
    const [navFadeIn, setNavFadeIn] = React.useState('-right-full');

    useEffect(() => {
        if (location.pathname === '/'){
            setNavFadeIn('transition-all duration-1000 right-0')
        }else{
            setNavFadeIn('right-0')
        }
        
    }, [])

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
        
    }

  return (
    <header className={`fixed bg-slate-50 top-0 ${navFadeIn} w-full flex items-center justify-center h-16 z-50 shadow-lg rounded`}>
        <nav className='flex items-center justify-center w-1024'>
            <ul className='flex items-center w-full justify-center gap-7 text-lg'>
                <li>
                    <a className='hover:text-secondary cursor-pointer' id='us' onClick={(e) => onHandleClick(e)}>Nosotros</a>
                    <ul className={`mt-5 drop-shadow-xl w-72 bg-slate-50 p-2 rounded-lg ${subMenuOpen.us ? 'absolute' : 'hidden'}`}>
                        <li className='my-1'><a className='hover:text-secondary' href="">Historia</a></li>
                        <li className='my-1'><a className='hover:text-secondary' href="">Modelo Educativo</a></li>
                        <li className='my-1'><a className='hover:text-secondary' href="">Calendario Institucional</a></li>
                    </ul>
                </li>
                <li>
                    <a className='hover:text-secondary cursor-pointer' id='academicOffer' onClick={(e) => onHandleClick(e)}>Oferta Académica</a>
                    <ul className={`mt-5 shadow-lg w-72 bg-slate-50 p-2 rounded-lg ${subMenuOpen.academicOffer ? 'absolute' : 'hidden'}`}>
                        <li className='my-1'><a className='hover:text-secondary' href="">Licenciaturas</a></li>
                        <li className='my-1'><a className='hover:text-secondary' href="">Posgrados</a></li>
                    </ul>
                </li>
                <li>
                    <a className='hover:text-secondary cursor-pointer' id='admissions' onClick={(e) => onHandleClick(e)}>Admisiones</a>
                    <ul className={`mt-5 shadow-lg w-72 bg-slate-50 p-2 rounded-lg ${subMenuOpen.admissions ? 'absolute' : 'hidden'}`}>
                        <li className='my-1'><a className='hover:text-secondary' href="">Proceso de admisión 2022</a></li>
                        <li className='my-1'><a className='hover:text-secondary' href="">Becas</a></li>
                    </ul>
                </li>
                <li>
                    <a className='hover:text-secondary cursor-pointer'  id='services' onClick={(e) => onHandleClick(e)}>Servicios</a>
                    <ul className={`mt-5 shadow-lg w-72 bg-slate-50 p-2 rounded-lg ${subMenuOpen.services ? 'absolute' : 'hidden'}`}>
                        <li className='my-1'><a className='hover:text-secondary' href="">Clases en línea</a></li>
                        <li className='my-1'><a className='hover:text-secondary' href="">Vinculación</a></li>
                    </ul>
                </li>
                <li><a className='hover:text-secondary cursor-pointer'  href="">Noticias</a></li>
                <li><a className='hover:text-secondary cursor-pointer'  href="">Egresados</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header