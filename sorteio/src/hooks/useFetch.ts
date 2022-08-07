import axios from 'axios'
import { useEffect, useState } from 'react'
import { api } from '../services/api'

type State<T> = {
  data: T | null
  isFetching?: boolean
  error?: string
}

const useFetch = <T = unknown>(route: string): State<T> => {
  const [data, setData] = useState<T | null>(null)
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(route)
        setData(response.data)
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message)
        }
      }
      setIsFetching(false)
    }
    fetchData()
  }, [])

  return {
    data,
    isFetching,
    error,
  }
}

export default useFetch
