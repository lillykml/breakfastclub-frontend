import { useState } from 'react'
import './App.css'
import Brunch from './components/Brunch'


function App() {

  //const [brunches, setBrunches] = useState([])
  const brunches = [
    {
      "id": 1,
      "date": "21.07.2024",
      "time": "10:30",
      "location": "Emmis Kitchen",
      "attendees": 4,
      "spots": 8
    },
    {
      "id": 2,
      "date": "21.07.2024",
      "time": "10:30",
      "location": "Trachtenvogel",
      "attendees": 4,
      "spots": 8
    },
    {
      "id": 3,
      "date": "21.07.2024",
      "time": "10:30",
      "location": "Wimmer Bäcker",
      "attendees": 4,
      "spots": 8
    }
  ]

  return (
    <>
     <h1>Weekend Breakfast Club</h1>
     <p>Join a weekend brunch to meet and connect with new people in your city.</p>
     {brunches.map(brunch => <Brunch key={brunch.id} brunch={brunch}/>)}
    </>
  )
}

export default App
