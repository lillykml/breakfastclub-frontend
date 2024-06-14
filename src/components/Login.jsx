import { useState } from "react"
import PropTypes from 'prop-types'

const Login = ({ login }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = (event) => {
        event.preventDefault()
        login({username, password})
        setUsername('')
        setPassword('')
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={loginHandler}>
                <div>
                    <label>Username </label>
                    <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}></input>
                </div>
                <div>
                    <label>Password </label>
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired
}

export default Login