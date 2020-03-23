import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return (
    <div>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures.'}
      </p>
      <div className='flex justify-center'>
        <div className='form w-60 pa5 br3 shadow-5'>
          <input type='text' className='pa3 w-60 f4' placeholder='Enter image URL here'  />
          <button className='pa3 w-20 grow link f4 dib'>Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;
