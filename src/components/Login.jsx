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
                    <label for="username" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Username </label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="username" type="text" value={username} onChange={(event) => setUsername(event.target.value)}></input>
                </div>
                <div className="mb-5">
                    <label for="password" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Password </label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
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