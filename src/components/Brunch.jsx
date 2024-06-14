import PropTypes from 'prop-types'


const Brunch = ({ brunch, user, signup }) => {

    const datetime = new Date(brunch.datetime);
    const date = datetime.toISOString().split('T')[0];
    const time = datetime.toISOString().split('T')[1].slice(0, 5);

    return(
        <>
        <p>{date} {time} @{brunch.locationName}</p>
        <p>{brunch.attendees.length} / {brunch.spots} spots filled {user && <button onClick={signup}>Sign-Up</button>}</p>
        </>
    )
}

Brunch.propTypes = {
    brunch: PropTypes.object.isRequired
}

export default Brunch