import { useCallback, useEffect, useState } from 'react'
import { getMovies } from '../services/movies'
import { Movie } from '../types/movies-api'

export function useMovies(firstPage = 1) {
  const [page, setPage] = useState(firstPage)
  const [pageCount, setPageCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<unknown>()
  const [movies, setMovies] = useState<Movie[]>([])

  const fetchMovies = useCallback(async () => {
    setLoading(true)
    try {
      const { results, total_pages } = await getMovies(page)
      setMovies(results)
      setPageCount(total_pages)
    } catch (err: unknown) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [page])

  useEffect(() => void fetchMovies(), [fetchMovies])

  return { loading, error, movies, page, setPage, pageCount, fetchMovies }
}
