import React from 'react';
import { render } from '@testing-library/react';
import Alert from '../../components/Alert';

describe('Alert', () => {
  it('displays an error message', () => {
    const { getByText, asFragment } = render(<Alert message="Error!" />);
    const alert = asFragment();
    expect(alert).toMatchSnapshot();
    expect(getByText(/Error/).textContent).toBe('Error!');
  });
  it('displays an success message', () => {
    const { getByText, asFragment } = render(
      <Alert message="Success!!!!" success />
    );
    const alert = asFragment();
    expect(alert).toMatchSnapshot();
    expect(getByText(/Success/).textContent).toBe('Success!!!!');
  });
  it('does not render an error or a success message if message props is empty', () => {
    const { asFragment } = render(<Alert message="" />);
    const alert = asFragment();
    expect(alert).toMatchSnapshot();
  });
});
