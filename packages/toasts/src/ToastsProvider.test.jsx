import React, { useContext } from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import ToastsProvider, { ToastsContext } from './ToastsProvider';
import Toasts from './Toasts';

const MockButtons = () => {
  const { addToast, removeToast } = useContext(ToastsContext);
  return (
    <>
      <Toasts />
      <button type="button" onClick={() => addToast('Butter')}>Add</button>
      <button type="button" onClick={() => removeToast(1)}>Remove</button>
    </>
  );
};

describe('ToastsProvider', () => {
  it('add Toasts', async () => {
    render(<ToastsProvider><MockButtons /></ToastsProvider>);
    const addToastButton = screen.getByText('Add');
    fireEvent.click(addToastButton);
    expect(screen.getByText('Butter')).toBeInTheDocument();
  });
  it('remove Toasts', async () => {
    render(<ToastsProvider><MockButtons /></ToastsProvider>);
    const addToastButton = screen.getByText('Add');
    const removeToastsButton = screen.getByText('Remove');
    fireEvent.click(addToastButton);
    fireEvent.click(removeToastsButton);
    expect(screen.queryByText('Butter')).not.toBeInTheDocument();
  });
  it('remove Toasts by Toast', async () => {
    render(<ToastsProvider><MockButtons /></ToastsProvider>);
    const addToastButton = screen.getByText('Add');
    fireEvent.click(addToastButton);
    const removeToast = screen.getByLabelText('Close');
    fireEvent.click(removeToast);
    expect(screen.queryByText('Butter')).not.toBeInTheDocument();
  });
});
