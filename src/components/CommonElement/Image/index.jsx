import React from 'react';
import { ADMIN_IMAGE_URL,  FRONTEND_IMAGE_URL} from '../../../config/index';


function Image({ previewSource = '', imageFor = "admin", source, alt='image', ...rest }) {
  const imagePath = {
    admin: ADMIN_IMAGE_URL,
    frontend: FRONTEND_IMAGE_URL
  };
  return (
    <>
      {previewSource ? (
        <img src={previewSource} alt={alt} {...rest} />
      ) : (
        <img src={`${imagePath[imageFor]}/${source}`} alt={alt} {...rest} />
      )}
    </>
  );
}

export default Image;