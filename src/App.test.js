import { render, screen } from '@testing-library/react';
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import BookingForm from './components/BookingForm';

test('Renders the BookingForm heading', () => {
    <Router>
      render(<BookingForm />);
    </Router>
    console.log(screen.debug());
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})