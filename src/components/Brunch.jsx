const Brunch = ({ brunch }) => {
    return(
        <>
        <p>{brunch.date} {brunch.time} @{brunch.location}</p>
        <p>Spots {brunch.attendees} / {brunch.spots} <button>Sign-Up</button></p>
        </>
    )
}

export default Brunch