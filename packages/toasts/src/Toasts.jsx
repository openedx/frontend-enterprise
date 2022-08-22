import React, { useContext } from 'react';
import { Toast } from '@edx/paragon';
import { ToastsContext } from './ToastsProvider';

const Toasts = () => {
  const { toasts, removeToast } = useContext(ToastsContext);
  return toasts.map(({
    id, message, show, action, delay,
  }) => (
    <Toast
      key={id}
      onClose={() => removeToast(id)}
      show={show}
      delay={delay}
      action={action}
    >
      {message}
    </Toast>
  ));
};

export default Toasts;
