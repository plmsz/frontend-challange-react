import axios from 'axios'

export const BASE_URL = 'https://brainn-api-loterias.herokuapp.com/api/v'
export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      window.location.href = '/error'
      return
    }
    return Promise.reject(error)
  },
)
