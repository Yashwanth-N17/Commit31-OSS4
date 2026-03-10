import axios from 'axios'

const apiBaseUrl =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? 'http://localhost:5000' : undefined)

if (!apiBaseUrl) {
  throw new Error('Missing VITE_API_URL environment variable')
}

const API = axios.create({
  baseURL: apiBaseUrl,
})

export async function loginUser(email, password) {
  try {
    const response = await API.post('/api/auth/login', { email, password })
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed')
  }
}

export async function registerUser(username, email, password) {
  try {
    const response = await API.post('/api/auth/register', { username, email, password })
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Registration failed')
  }
}