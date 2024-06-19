import PropTypes from 'prop-types'
import { useState } from 'react';


const Brunch = ({ brunch, user, signup, deregister }) => {

    const [attends, setAttends] = useState(user ? brunch.attendees.some(attendee => attendee.id === user.id) : false)

    const datetime = new Date(brunch.datetime);
    const formattedDate = datetime.toLocaleDateString('en-US', {
        weekday: 'long', // full name of the day of the week
        day: 'numeric', // numeric day of the month
        month: 'long' // full name of the month
    });
    const time = datetime.toISOString().split('T')[1].slice(0, 5);

    const signupUser = () => {
        signup()
        setAttends(!attends)
    }

    const deregisterUser = () => {
        deregister()
        setAttends(!attends)
    }

    return(
        <div className='m-2 rounded border border-gray-400 p-2.5 brunch'>
        <p>{formattedDate} {time}</p>
        <p>@ {brunch.locationName}</p>
        <p>{brunch.attendees.length} / {brunch.spots} spots filled
            {user && !attends && <button className='button' onClick={signupUser}>Sign-Up</button>}
            {user && attends && <button className='button' onClick={deregisterUser}>Cancel</button>}</p>
        </div>
    )
}

Brunch.propTypes = {
    brunch: PropTypes.object.isRequired
}

export default Brunch