import { render, screen } from '@testing-library/react';
import React from 'react'
import App from './App';

test('Renders the BookingForm heading', () => {
    render(<App />);
    // console.log(screen.debug());
    // const headingElement = screen.getByText("Book Now");
    // expect(headingElement).toBeInTheDocument();
})