import { submitAPI } from "../mockAPI"
import { useNavigate } from 'react-router-dom';
import React from 'react'

export default function BookingForm({times, formData, handleChange}) {
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault()
    const reserve = submitAPI(formData)
    reserve
      .then((result) => {
        console.log('Form submitted successfully', result);
        localStorage.setItem('reserveData', JSON.stringify(formData))
        const reserveData = JSON.parse(localStorage.getItem('reserveData'))
        console.log(reserveData)
        navigate('/confirmed-booking')
      })
      .catch((error) => {
        console.error('Form submission failed', error);
      });
    console.log(reserve)
    alert('Form submitted successfully!');
  }
  //console.log('These are the times: ', times.value)
    return(
    <div className="booking-div karla-regular">
      <h1 className="page-title">Reserve Your Table</h1>
      <form
        className="booking-form"
        onSubmit={handleSubmit}
      >
        <div id="form-text-spacing">
          <label htmlFor="res-date" className="form-text">Choose a date: </label>
          <input
              type="date"
              id="res-date"
              name="formDate"
              value={formData.formDate}
              onChange={handleChange}
              required
              data-testid="date-input"
          />
        </div>
        <div >
          <label htmlFor="res-time" className="form-text">Choose a time: </label>
          <select
              id="res-time"
              name="formTime"
              onChange={handleChange}
              required
          >
            <option value="">Select a time</option>
            {times.value ? (
              times.value.map((time) => (
                  <option key={time}>{time}</option>
              ))
              ) : (
                <option>date needed</option>
            )}
          </select>
        </div>
        <div >
          <label htmlFor="guests" className="form-text">Number of guests: </label>
          <input
              type="number"
              placeholder="1"
              min="1" max="10"
              id="guests"
              name="guestsNumber"
              value={formData.guestsNumber}
              onChange={handleChange}
          />
        </div>
        <div >
          <label htmlFor="occasion" className="form-text">Occasion: </label>
          <select
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
          >
            <option></option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <div >
          <input className="bookingButton" type="submit" value="Submit" id="form-button"/>
        </div>
      </form>
  
    </div>
  )
}