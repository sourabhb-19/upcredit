// Toaster.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Toaster({ autoClose = 5000, position = "top-right", theme = "light", ...props }) {
  return (
    <>
      <ToastContainer
        position={position}
        autoClose={autoClose}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
        transition={Bounce}
        {...props}
      />      
    </>
  );
}

Toaster.propTypes = {
  autoClose: PropTypes.number,
  position: PropTypes.string,
  theme: PropTypes.string,
};
