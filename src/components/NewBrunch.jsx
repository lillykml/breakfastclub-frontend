import { useState } from "react"
import PropTypes from 'prop-types'

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
        <h2 className="text-4xl mb-9">Organize a new brunch</h2>
        <form onSubmit={createNewBrunch}>
            <div>
                <label className="label-style" >Date</label>
                <input className="input-style" type='date' value={brunchDate} onChange={(event) => setBrunchDate(event.target.value)}></input>
            </div>
            <div>
                <label className="label-style" >Time</label>
                <input className="input-style" type='time' value={brunchTime} onChange={(event) => setBrunchTime(event.target.value)}></input>
            </div>
            <div>
                <label className="label-style" >Location</label>
                <input className="input-style" type='text' value={brunchLocation} onChange={(event) => setBrunchLocation(event.target.value)}></input>
            </div>
            <div>
                <label className="label-style" >Address</label>
                <input className="input-style" type='text' value={brunchAddress} onChange={(event) => setBrunchAddress(event.target.value)}></input>
            </div>
            <div>
                <label className="label-style" >Spots</label>
                <input className="input-style" type='number' value={brunchSpots} onChange={(event) => setBrunchSpots(event.target.value)}></input>
            </div>
            <div className="text-center">
            <button className="button" type='submit'>Create</button>
            </div>
        </form>
        </>
    )
}

NewBrunch.propTypes = {
    create: PropTypes.func.isRequired
}

export default NewBrunch