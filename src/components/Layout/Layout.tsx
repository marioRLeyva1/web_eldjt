import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import MobileHeader from '../MobileHeader/MobileHeader'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Loader from '../Loader/Loader'

const Layout = (props:any) => {

    const maintenance = false

    useEffect(() => {
        document.documentElement.scrollTop = 0;
    }, []);

  return (
    <div className='font-poppins relative min-h-screen'>
        <Loader open={maintenance} onCloseLoader={() => console.log('cerrar')} title={`Nos encontramos en mantenimiento`} message={'Intenta más tarde'}></Loader>
        {!maintenance && <React.Fragment>
            <div className='sm:hidden fixed w-full top-0 z-50'>
                <MobileHeader/>
            </div>
            <div className='hidden sm:flex sm:fixed sm:w-full sm:top-0 sm:z-50'>
                <Header location={props.location}/>
            </div>
            <div className='pb-5 flex items-center justify-center'>
                {props.children}
            </div>
            <div className=' w-full absolute'>
                <Footer/>
            </div>
        </React.Fragment>}
    </div>
  )
}

export default Layout