import React, { useEffect } from 'react'
import MenuIcon from '../../icons/menu-icon.svg'
import ELDJTPNG from '../../../src/icons/eldjt-png.png'
import Menu from './components/Menu';

const Header = () => {

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
    <header className='bg-white h-20 flex justify-between'>
        <div className='flex justify-center items-center'>
            <img src={ELDJTPNG} alt='menu' className='h-16 w-16 ml-5'/>
            <p className='ml-5 text-xl'>ELDJT</p>
        </div>
        <img src={MenuIcon} alt='menu' className='p-7' onClick={onHandleMenu}/>
        <Menu open={openMenu}/>
    </header>
  )
}

export default Header