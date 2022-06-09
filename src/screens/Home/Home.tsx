import React from 'react'
import MobileHeader from '../../components/MobileHeader/MobileHeader'

const Home = () => {
  return (
    <React.Fragment>
        <div className='sm:hidden'>
            <MobileHeader/>
        </div>
        <div></div>
    </React.Fragment>
  )
}

export default Home