const Notification = ({ message, type }) => {
    if (message === null) return null
    else {
        return (
        <div className={`${type} notification`}>
            <p>{message}</p>
        </div>)
    }
}


export default Notification