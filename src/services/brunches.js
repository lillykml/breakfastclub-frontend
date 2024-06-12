import axios from "axios"
const baseUrl = '/api/brunches'


const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async (newBrunch) => {
    const response = await axios.post(baseUrl, newBrunch)
    return response.data
}

export default { getAll, create }