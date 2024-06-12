import { useState } from 'react'
import './App.css'
import Brunch from './components/Brunch'
import Hero from './components/Hero'
import NewBrunch from './components/NewBrunch'


function App() {

  const initialbrunches = [
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

  const [brunches, setBrunches] = useState(initialbrunches)


  const createBrunch = (brunch) => {
    setBrunches(brunches.concat(brunch))
  }

  return (
    <>
    <Hero />
    <NewBrunch create={createBrunch}/>
    {brunches.map(brunch => <Brunch key={brunch.id} brunch={brunch}/>)}
    </>
  )
}

export default App
