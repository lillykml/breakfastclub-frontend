import axios from "axios"
const baseUrl = '/api/brunches'

let token = null

const setToken = (newToken) => {
    token = `Bearer ${newToken}`
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async (newBrunch) => {

    const config = {
        headers: { Authorization: token },
    }

    const response = await axios.post(baseUrl, newBrunch, config)
    return response.data
}

const signup = async (brunchId) => {

    const config = {
        headers: { Authorization: token },
    }

    const response = await axios.put(`${baseUrl}/${brunchId}/signup`, {}, config)
    return response.data
}

export default { getAll, create, setToken, signup }