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
        <>
            <h2 className="text-4xl mb-9">Login</h2>
            <form onSubmit={loginHandler} className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label className="label-style" >Username </label>
                    <input className="input-style" id="username" type="text" value={username} onChange={(event) => setUsername(event.target.value)}></input>
                </div>
                <div className="mb-5">
                    <label className="label-style" >Password </label>
                    <input className="input-style" id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
                </div>
                <div className="text-center">
                    <button className="button" type="submit">Login</button>
                </div>
            </form>
        </>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired
}

export default Login