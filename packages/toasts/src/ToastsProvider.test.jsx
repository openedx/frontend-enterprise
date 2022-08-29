import React, { useContext } from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import ToastsProvider, { ToastsContext } from './ToastsProvider';
import Toasts from './Toasts';
import enTranslations from './en.json';

const MockButtons = () => {
  const { toasts, addToast, removeToast } = useContext(ToastsContext);
  return (
    <>
      <Toasts />
      <button type="button" onClick={() => addToast('Butter')}>Add</button>
      <button type="button" onClick={() => removeToast(toasts[0].id)}>Remove</button>
    </>
  );
};
const MockButtons2 = () => {
  const { toasts, addToast, removeToast } = useContext(ToastsContext);
  return (
    <>
      <Toasts />
      <button type="button" onClick={() => addToast('Github', { label: 'Test', href: 'https://github.com/' })}>Add</button>
      <button type="button" onClick={() => removeToast(toasts[0].id)}>Remove</button>
    </>
  );
};
describe('ToastsProvider', () => {
  it('add Toasts', async () => {
    render(<ToastsProvider><IntlProvider messages={enTranslations} locale="en" defaultLocale="en"><MockButtons /></IntlProvider></ToastsProvider>);
    const addToastButton = screen.getByText('Add');
    fireEvent.click(addToastButton);
    expect(screen.getByText('Butter')).toBeInTheDocument();
  });
  it('add toasts link', async () => {
    render(
      <ToastsProvider>
        <IntlProvider messages={enTranslations} locale="en" defaultLocale="en">
          <MockButtons2 />
        </IntlProvider>
      </ToastsProvider>,
    );
    const addToastButton = screen.getByText('Add');
    fireEvent.click(addToastButton);
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Github')).toBeInTheDocument();
  });
  it('remove toasts link', async () => {
    render(
      <ToastsProvider>
        <IntlProvider messages={enTranslations} locale="en" defaultLocale="en">
          <MockButtons2 />
        </IntlProvider>
      </ToastsProvider>,
    );
    const addToastButton = screen.getByText('Add');
    fireEvent.click(addToastButton);
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Github')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Remove'));
    expect(screen.queryAllByRole('alert')[0].firstChild.classList.contains('fade')).toBeTruthy();
  });
});
