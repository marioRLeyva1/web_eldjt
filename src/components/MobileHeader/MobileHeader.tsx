import React, { useEffect } from 'react'
import MenuIcon from '../../icons/menu-icon.svg'
import { Menu } from './components/Menu';

const MobileHeader = () => {

    const [openMenu, setOpenMenu] = React.useState(false);
    const [menuBG, setMenuBG] = React.useState(false);

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
          setMenuBG(true);
        }
        if (scrolled === 0) {
          setMenuBG(false);
        }
        console.log('scrolled', scrolled);
        
    };

    const onHandleMenu = () => {
        setOpenMenu(openMenu === true ? false : true)
    };
  return (
    <React.Fragment>
      <header className={`bg-dark h-20 flex justify-between shadow-xl sticky`}>
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