import React from 'react'
import Arrow from '../../icons/arraow.svg'

const Card = (props: any) => {
  return (
    <div className='flex flex-col items-center justify-center w-80 sm:w-96 rounded shadow-lg my-4 bg-slate-50 font-poppins'>
        <img src={props.img} className='rounded-t object-cover w-full' />
        <h3 className='font-semibold text-lg'>{props.title}</h3>
        <div className='h-14 flex items-center justify-center px-1'>
          <p className='text-slate-600 text-center'>{props.subtitle}</p>
        </div>
        <button className='flex items-center justify-center text-xs border-2 rounded px-3 py-1 mt-1 mb-3 bg-secondary text-white shadow sm:text-base sm:rounded-lg '>
            <p>{props.buttonLabel ? `${props.buttonLabel}` : 'LEER MÁS'}</p>
            <img src={Arrow} alt="arrow" className='-rotate-90 w-4'/>
        </button>
    </div>
  )
}

export default Card