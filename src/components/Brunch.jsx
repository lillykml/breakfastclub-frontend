const Brunch = ({ brunch }) => {
    return(
        <>
        <p>{brunch.date}</p>
        <p>{brunch.time}</p>
        <p>{brunch.location}</p>
        <p>Spots {brunch.attendees} / {brunch.spots}</p>
        <button>Sign-Up</button>
        </>
    )
}

export default Brunch