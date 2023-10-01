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
        // Handle the successful form submission
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
  console.log('These are the times: ', times.value)
    return(
    <>
      <h1>Book Now</h1>
      <form
        className="bookingForm"
        onSubmit={handleSubmit}
        style={{
          display: 'grid',
          maxWidth: '200px',
          minHeight: '60vh',
          gap: '20px',
          background: 'pink'
        }}
      >
        <div>
          <label htmlFor="res-date">Choose date</label>
          <input
              type="date"
              id="res-date"
              name="formDate"
              value={formData.formDate}
              onChange={handleChange}
              required
          />
        </div>
        <div>
          <label htmlFor="res-time" >Choose time</label>
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
                <option>Times are not available</option>
            )}
          </select>
        </div>
        <div>
          <label htmlFor="guests">Number of guests</label>
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
        <div>
          <label htmlFor="occasion">Occasion</label>
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
        <div>
          <input className="bookingButton" type="submit" value="Make Your reservation" />
        </div>
      </form>
      {formData.formDate}
      {formData.formTime}
      {formData.guestsNumber}
      {formData.occasion}
    </>
  )
}