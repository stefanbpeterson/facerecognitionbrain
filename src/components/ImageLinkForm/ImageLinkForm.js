import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p className='f4 white pt3'>
        {'Paste an image URL and the Magic Computer Brain will try to figure out your age, gender, and ethnicity.'}
      </p>
      <div className='flex justify-center'>
        <div className='form w-60 pa5 br3 shadow-5'>
          <input type='text' className='pa3 w-60 f4' placeholder='Enter image URL here' onChange={onInputChange} />
          <button className='pa3 w-20 grow link f4 dib' onClick={onSubmit}>Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;
