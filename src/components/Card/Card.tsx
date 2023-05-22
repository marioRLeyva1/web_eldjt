import React from 'react'
import Arrow from '../../icons/arraow.svg'

const Card = (props: any) => {
  
  return (
    <div className='flex flex-col items-center justify-center w-80 sm:w-96 rounded shadow-lg my-4 bg-slate-50 font-poppins'>
        <div className='flex sm:h-72 rounded-t'>
          <img src={props.img} className='object-cover' />
        </div>
        <h3 className='font-semibold text-lg pt-2 text-center px-2'>{props.title}</h3>
        <div className='h-14 flex items-center justify-center px-1 mt-2'>
          <p className='text-slate-600 text-center'>{props.subtitle}</p>
        </div>
        <div className='py-3'>
           <button className='flex items-center justify-center text-xs border-2 rounded px-3 py-1 sm:mt-1 sm:mb-3 bg-secondary text-white shadow sm:text-base sm:rounded-lg mt-3' onClick={() => props.onButtonClick()}>
              <p>{props.buttonLabel ? `${props.buttonLabel}` : 'LEER MÁS'}</p>
              <img src={Arrow} alt="arrow" className='-rotate-90 w-4'/>
          </button>
        </div>
    </div>
  )
}

export default Card