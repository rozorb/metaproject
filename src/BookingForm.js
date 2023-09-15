import { useState } from 'react'


export default function BookingForm() {
  const [formData, setFormData] = useState({
      formDate:'', formTime:'', guestsNumber:'1', occasion:''}
  )

  const [availableTimes, setAvailableTime] = useState(
      ["17:00","18:00","19:00","20:00","21:00","22:00", "23:00"]
  )

  console.log(formData)

  function handleChange(e) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const reserve = {formData}
    console.log(reserve)
    alert('Form submitted successfully!');
  }

    return(
    <>
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
            {availableTimes.map(time => {
              return (
                <option>{time}</option>
              )
            })}
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
              onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="occasion">Occasion</label>
          <select
              id="occasion"
              name="occasion"
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