import axios from 'axios'

const BASE_URL = 'https://brainn-api-loterias.herokuapp.com/api/v1'
export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
})
