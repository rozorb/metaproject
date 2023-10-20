import React, { useState, useEffect } from 'react'

export default function ConfirmedBooking() {
  const [savedBooking, setSavedBooking] = useState('')
  const [getName, setGetName] = useState('')
  useEffect(() => {
    const info = JSON.parse(localStorage.getItem('reserveData'))
    console.log('This is the info', info)
    setSavedBooking(`${info.formDate} at ${info.formTime}`)
    console.log(savedBooking)
    setGetName(`${info.name}`)
  }, [])
  return(
    <div className='confirmed-background'>
      <div className='confirmed-page'>
        <h2 id='confirmed-heading'>Booking Confirmed</h2>
        <p>Thank you <span>{getName}</span>, we look forward to seeing you on:
        
        </p>
        <p>{savedBooking !== '' ? savedBooking : 'did not display'}</p>
      </div>
    </div>
  )
}