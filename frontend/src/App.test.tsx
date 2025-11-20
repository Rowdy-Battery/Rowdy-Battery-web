import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
// Mock react-router-dom for the test environment so Jest doesn't need the real browser router
jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }: any) => <div>{children}</div>,
  Link: ({ children }: any) => <a>{children}</a>,
  Routes: ({ children }: any) => <div>{children}</div>,
  Route: ({ children }: any) => <div>{children}</div>,
}));



describe('The main app', () => {

  it('should render the Orders link', () => {
    render(<App />);
    expect(screen.getByText('Orders')).toBeInTheDocument();
  });

  it('should render the Payments component/link', () => {
    render(<App />);
    // the nav shows "Payment" (singular) in the markup
    expect(screen.getByText('Payment')).toBeInTheDocument();
  });

  it('should render the Home link', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  });

  it('should render the Home header', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });
});


