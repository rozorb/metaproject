import BookingForm from "../components/BookingForm"
import React from 'react'

export default function BookingPage({times, formData, handleChange}) {
  console.log(`This is the booking page props: ${JSON.stringify(formData)}`)
    return(
        <>
          <BookingForm
            times={times}
            handleChange={handleChange}
            formData={formData}
          />
        </>
    )
}