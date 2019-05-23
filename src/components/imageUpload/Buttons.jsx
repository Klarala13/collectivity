import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faImage } from '@fortawesome/free-solid-svg-icons'

export default props => 
  <div className='buttons fadein'>
    <div className='button'>
      <label htmlFor='image'>
        <FontAwesomeIcon icon={faImage} color='#3B5998' size='10x' />
      </label>
      <input type='file' id='image' onChange={props.onChange} /> 
    </div>
    </div>