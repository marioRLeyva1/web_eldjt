import React, { useEffect } from 'react'
import MenuIcon from '../../icons/menu-icon.svg'
import ELDJTPNG from '../../../src/icons/eldjt-png.png'
import { Menu } from './components/Menu';

const MobileHeader = () => {

    const [openMenu, setOpenMenu] = React.useState(false);

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

        console.log('scrolled', scrolled);
        
    };

    const onHandleMenu = () => {
        setOpenMenu(openMenu === true ? false : true)
    };
  return (
    <React.Fragment>
      <header className='bg-dark h-20 flex justify-between'>
          <div className='flex justify-center items-left flex-col'>
              {/* <p className='ml-5 text-light'>ELDJT</p> */}
              <p className='ml-5 text-light text-lg'>Escuela Libre de Derecho</p>
              <p className='ml-5 text-light text-xs'> y Jurisprudencia de Tabasco</p>
          </div>
          <img src={MenuIcon} alt='menu' className='p-7' onClick={onHandleMenu}/>
      </header>
      <Menu open={openMenu}/>
    </React.Fragment>
  )
}

export default MobileHeader