import { useState } from "react"

const NewBrunch = ({ create }) => {

    const [brunchDate, setBrunchDate] = useState('')
    const [brunchTime, setBrunchTime] = useState('')
    const [brunchLocation, setBrunchLocation] = useState('')
    const [brunchAddress, setBrunchAddress] = useState('')
    const [brunchSpots, setBrunchSpots] = useState('')

    const createNewBrunch = (event) => {
        event.preventDefault()

        const newBrunch = {
            "datetime": new Date(brunchDate + 'T' + brunchTime).toISOString(),
            "location": brunchLocation,
            "address": brunchAddress,
            "spots": brunchSpots
        }

        create(newBrunch)

        setBrunchDate('')
        setBrunchTime('')
        setBrunchLocation('')
        setBrunchSpots('')
        setBrunchAddress('')
    }

    return (
        <>
        <form onSubmit={createNewBrunch}>
            <div>
                <label>Date</label>
                <input type='date' value={brunchDate} onChange={(event) => setBrunchDate(event.target.value)}></input>
            </div>
            <div>
                <label>Time</label>
                <input type='time' value={brunchTime} onChange={(event) => setBrunchTime(event.target.value)}></input>
            </div>
            <div>
                <label>Location</label>
                <input type='text' value={brunchLocation} onChange={(event) => setBrunchLocation(event.target.value)}></input>
            </div>
            <div>
                <label>Address</label>
                <input type='text' value={brunchAddress} onChange={(event) => setBrunchAddress(event.target.value)}></input>
            </div>
            <div>
                <label>Spots</label>
                <input type='number' value={brunchSpots} onChange={(event) => setBrunchSpots(event.target.value)}></input>
            </div>
            <button type='submit'>Create</button>
        </form>
        </>
    )
}

export default NewBrunch