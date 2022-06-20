import React from 'react'
import MenuIcon from '../../icons/menu-icon.svg'
import { Menu } from './components/Menu';

const MobileHeader = (props:any) => {

    const [openMenu, setOpenMenu] = React.useState(false);

    const onHandleMenu = () => {
        setOpenMenu(openMenu === true ? false : true)
    };

  return (
    <React.Fragment>
      <header className={`bg-white h-20 flex justify-between shadow-xl w-screen fixed top-0 rounded`}>
          <div className='flex justify-center items-center flex-col w-full'>
              {/* <p className='ml-5 text-light'>ELDJT</p> */}
              <img src="https://firebasestorage.googleapis.com/v0/b/eldjt-web.appspot.com/o/misc%2Feldjt.png?alt=media&token=e384ed2e-d88d-4e02-a863-8adb15f772bb" alt="eldjt" className='w-60' />
              {/* <p className='ml-5 text-light text-lg'>Escuela Libre de Derecho</p>
              <p className='ml-5 text-light text-xs'> y Jurisprudencia de Tabasco</p> */}
          </div>
          <img src={MenuIcon} alt='menu' className='w-20 h-20 p-7 absolute right-0' onClick={onHandleMenu}/>
      </header>
      <Menu open={openMenu} onCloseMenu={onHandleMenu}/>
    </React.Fragment>
  )
}

export default MobileHeader