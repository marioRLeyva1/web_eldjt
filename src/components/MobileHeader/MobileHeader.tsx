import React from 'react'
import MenuIcon from '../../icons/menu-icon.svg'
import { Menu } from './components/Menu';
import { useNavigate } from 'react-router-dom';

const MobileHeader = (props:any) => {

    const [openMenu, setOpenMenu] = React.useState(false);
    const navigate = useNavigate();

    const onHandleMenu = () => {
        setOpenMenu(openMenu === true ? false : true)
    };

    const onHandleMenuClick = (e:any) => {
      const {target: {innerHTML}} = e;
      console.log(innerHTML);
      
      switch (innerHTML) {
          case 'Inicio':
              navigate('/')
              setOpenMenu(false)
              break;
          case 'Historia':
              navigate('/nosotros/historia')
              setOpenMenu(false)
              break;
          case 'Modelo Educativo':
              navigate('/nosotros/modelo-educativo')
              setOpenMenu(false)
              break;
          case 'Calendario Institucional':
              navigate('/nosotros/calendario-institucional')
              setOpenMenu(false)
              break;
          case 'Licenciaturas':
              navigate('/licenciaturas')
              setOpenMenu(false)
              break;
          case 'Posgrados':
              navigate('/posgrados')
              setOpenMenu(false)
              break;
          case 'Prepa':
              navigate('/prepa')
              setOpenMenu(false)
              break;
          case 'Proceso de admisión 2022':
              navigate('/admisiones')
              setOpenMenu(false)
              break;
          case 'Becas':
              navigate('/becas')
              setOpenMenu(false)
              break;
          case 'Clases en línea':
              navigate('/clases-online')
              setOpenMenu(false)
              break;
          case 'Vinculación':
              navigate('/vinculacion')
              setOpenMenu(false)
              break;
          case 'Pago en línea':
              navigate('/pago')
              setOpenMenu(false)
              break;
          case 'Noticias':
              navigate('/noticias')
              setOpenMenu(false)
              break;
          case 'Egresados':
              navigate('/egresados')
              setOpenMenu(false)
              break;
          default:
              break;
      }
  }
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
      <Menu open={openMenu}/>
    </React.Fragment>
  )
}

export default MobileHeader