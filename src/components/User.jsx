import PropTypes from 'prop-types'


const User = ({ user, logout }) => {

    return(
        <>
            <p>{user.name} logged in</p>
            <button onClick={logout}>Logout</button>
        </>
    )
}

User.propTypes = {
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}

export default User