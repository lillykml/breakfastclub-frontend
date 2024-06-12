const Brunch = ({ brunch }) => {

    const datetime = new Date(brunch.datetime);
    const date = datetime.toISOString().split('T')[0];
    const time = datetime.toISOString().split('T')[1].slice(0, 5);

// Log or use the date and time components
console.log('Date:', date); // Output: "2023-06-12"
console.log('Time:', time); 
    return(
        <>
        <p>{date} {time} @{brunch.locationName}</p>
        <p>{brunch.attendees} / {brunch.spots} spots filled <button>Sign-Up</button></p>
        </>
    )
}

export default Brunch