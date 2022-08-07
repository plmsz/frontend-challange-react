import axios from 'axios'
import { useEffect, useState } from 'react'
import { api } from '../services/api'
import useDrawContext from './useDrawContext'

type State<T> = {
  data: T | null
  isFetching?: boolean
  error?: string
}

const useFetch = <T = unknown>(route: string): State<T> => {
  const [data, setData] = useState<T | null>(null)
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState('')
  const { setMessageError } = useDrawContext()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(route)
        setData(response.data)
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message)
          setMessageError(true)
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
