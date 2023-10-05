import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import BookingPage from './pages/BookingPage.js'
import ConfirmedBooking from './pages/ConfirmedBooking'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import React, { useState, useReducer, useEffect } from 'react'
import { fetchAPI } from "./mockAPI"


function getCurrentDate() {
  const currentDate = new Date()

  const year = currentDate.getFullYear()
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
  const day = (currentDate.getDate() + 1).toString().padStart(2, '0')

  const formattedDate = `${year}-${month}-${day}`;
  console.log("This is the formattedDate ", formattedDate)

  return formattedDate
}


function updateTimes(state, date) {
  switch(date.type) {
    case 'Date_Selected': {
      console.log("This is the Date_Selected: ", date)
      return {...state, value: date.availability}
    }
    case 'Current_Date_Times': {
      console.log("This is the Current_Date_Times: ", date)
      return {...state, value: date.availability}
    }
    default: {
      return state
    }
  }
}


function App() {
  const [initialize, setInitialize] = useState(false) //state condition to set initial value for current date
  const [formData, setFormData] = useState({
    formDate:'', formTime:'', guestsNumber:'1', occasion:''}
  )
  const [state, dispatch] = useReducer(updateTimes, ["17:00","18:00","19:00"])  // state for reserve times based on date

  useEffect(() => {
    if(!initialize) {
      setInitialize(prevValue => !prevValue)
      fetchAPI(getCurrentDate())
      .then((times) => {
        dispatch({ type: 'Current_Date_Times', availability: times  })
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message);
      })
    }
  }, [initialize])

  function returnTableTimes(date) {  //function to return times based on selected date
    fetchAPI(date)
    .then((result) => {
      console.log('These are the times: ', result)
      dispatch({ type: 'Date_Selected', availability: result })
    })
    .catch((error) => {
      console.error('Error fetching data:', error.message);
    })
   }

  function handleChange(e) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      }
    })
    if(e.target.name === "formDate") {        //checks if selected date changed
      console.log("You interacted with date: " + e.target.value)
      returnTableTimes(e.target.value)
    }
  }
  const availableTimes = state

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking-page" element={
              <BookingPage
                times={availableTimes}
                handleChange={handleChange}
                formData={formData}
              />
            }/>
            <Route path='/confirmed-booking' element={
              <ConfirmedBooking />
            }/>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
