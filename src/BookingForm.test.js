import { render, fireEvent, screen } from '@testing-library/react'
import React from 'react'
import BookingForm from './components/BookingForm'
import { MemoryRouter } from 'react-router-dom'

test('Checks form validation', () => {
    const tempTimes = []
    const tempProps = {formDate:'', formTime:'', guestsNumber:'', occasion:''}
    render(
      <MemoryRouter>
        <BookingForm times={tempTimes} formData={tempProps} handleChange={() => {}}/>
      </MemoryRouter>
    )



    fireEvent.input(screen.getByLabelText('Choose a date:'), {
      target: { value: '' },
    })

    fireEvent.submit(screen.getByRole('button', { name: 'Submit' }));

    expect(screen.getByLabelText('Choose a date:')).toBeInvalid();

    // fireEvent.input(screen.getByLabelText('Choose a date:'), {
    //   target: { value: '2023-10-15' },
    // });

    // fireEvent.input(screen.getByLabelText('Choose a time:'), {
    //   target: { value: '10:00' },
    // });
    
    // // Simulate form submission
    // fireEvent.submit(screen.getByRole('button', { name: 'Submit' }));
    
    // // Assert that the date field is valid after valid submission
    // expect(screen.getByLabelText('Choose a date:')).toBeValid();
    

})