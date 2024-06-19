import PropTypes from 'prop-types'


const Brunch = ({ brunch, user, signup, deregister }) => {

    const datetime = new Date(brunch.datetime);
    const formattedDate = datetime.toLocaleDateString('en-US', {
        weekday: 'long', // full name of the day of the week
        day: 'numeric', // numeric day of the month
        month: 'long' // full name of the month
    });
    const time = datetime.toISOString().split('T')[1].slice(0, 5);

    const attends = user ? brunch.attendees.some(attendee => attendee.id === user.id) : false

    return(
        <div className='m-2 rounded border border-gray-400 p-2.5 brunch'>
        <p>{formattedDate} {time}</p>
        <p>@ {brunch.locationName}</p>
        <p>{brunch.attendees.length} / {brunch.spots} spots filled 
            {user && !attends && <button className='button' onClick={signup}>Sign-Up</button>}
            {user && attends && <button className='button' onClick={deregister}>Cancel</button>}</p>
        </div>
    )
}

Brunch.propTypes = {
    brunch: PropTypes.object.isRequired
}

export default Brunch