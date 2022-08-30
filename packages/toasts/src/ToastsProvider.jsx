import React, {
  createContext, useState, useMemo, useCallback,
} from 'react';
import PropTypes from 'prop-types';

export const ToastsContext = createContext();
const ToastsProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  /**
   * message parameter can either be a string or React node component - Displays text or component in the toasts.
   * delay parameter must be a number - Optional. The time in milliseconds to show the toast.
   * action parameter must be an object with the following properties:
   * label: string - Required. The label for the action button.
   * href: string - **Optional**. The href for the action button.
   * onClick: function - **Optional**. The function to be called when the action button is clicked.
   * ** action must contain either href or onClick property **.
   * The functionality mimics the functionality of the '@edx/paragon' Toast component.
   * See {@link https://paragon-openedx.netlify.app/components/toast/#home}
   */
  const addToast = useCallback((message, actionObj = null, delayLength = 5000) => {
    setToasts(prevToasts => [
      ...prevToasts,
      {
        id: prevToasts.length,
        action: actionObj,
        message,
        show: true,
        delay: delayLength,
      },
    ]);
  }, []);

  const removeToast = useCallback((async (id) => {
    const index = toasts.findIndex(toast => toast.id === id);
    setToasts((prevToasts) => {
      const newToasts = [...prevToasts];
      newToasts[index].show = false;
      return newToasts;
    });
  }), [toasts]);

  const value = useMemo(() => ({ toasts, addToast, removeToast }), [addToast, removeToast, toasts]);
  return (
    <ToastsContext.Provider value={value}>
      {children}
    </ToastsContext.Provider>
  );
};

ToastsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ToastsProvider;
