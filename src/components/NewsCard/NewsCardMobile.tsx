import React from 'react'
import Arrow from '../../icons/arraow.svg'
import { ELDJTWEBURL } from '../../utils/constans'

const NewsCardMobile = (props: any) => {
  
  return (
    <div className='flex flex-col items-center justify-center w-full rounded shadow-lg my-4 x-10 bg-slate-50 font-poppins'>
        <div className='flex sm:h-72 rounded-t'>
          <img src={props.img} className='object-cover' />
        </div>
        <h3 className='font-semibold text-lg pt-2 text-center px-2'>{props.title}</h3>
        <div className='h-14 flex items-center justify-center px-1'>
          <p className='text-slate-600 text-center'>{props.subtitle}</p>
        </div>
        <button className='flex items-center justify-center text-xs border-2 rounded px-3 py-1 mb-4 bg-secondary text-white shadow sm:text-base sm:rounded-lg mt-5' onClick={() => props.onChange()}>
            <p>{props.buttonLabel ? `${props.buttonLabel}` : 'LEER MÁS'}</p>
            <img src={Arrow} alt="arrow" className='-rotate-90 w-4'/>
        </button>
    </div>
  )
}

export default NewsCardMobile