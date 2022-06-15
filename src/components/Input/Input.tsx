import React from 'react'
import PropTypes from 'prop-types'

const Input = (props:any) => {

    const {label, placeholder, type, maxlenght, minlenght, required} = props;
    
  return (
    <div className='flex flex-col'>
        {label && <label htmlFor='input' className='ml-6 my-2'>{label}</label>}
        {type !== 'textArea' && <input 
            id='input' 
            type={type} 
            placeholder={placeholder} 
            maxLength={maxlenght} 
            minLength={minlenght}
            className={`mx-5 p-2 border rounded drop-shadow`}
        />
        }
    </div>
  )
}

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    maxlenght: PropTypes.number,
    minlenght: PropTypes.number,
    required: PropTypes.bool.isRequired
}

export default Input