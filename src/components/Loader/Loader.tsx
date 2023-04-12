import React from 'react'
import { Oval } from 'react-loader-spinner'

interface LoaderProps {
    title?: string,
    message?: string,
    open: boolean,
    onCloseLoader: () => void
}

const Loader = (props: LoaderProps) => {
  return (
    <div className='w-full h-screen m-auto flex flex-col items-center align-middle justify-center'>
        <Oval
        height={80}
        width={80}
        color="#C28128"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#EA9A28"
        strokeWidth={2}
        strokeWidthSecondary={2}
        />
        <h2 className='text-xl mt-4 text-slate-800'>{props.title}</h2>
        <h6 className='text-lg text-slate-600'>{props.message}</h6>
    </div>
  )
}

export default Loader