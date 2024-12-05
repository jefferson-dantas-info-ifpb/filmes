import { useCallback, useEffect, useState } from 'react'
import { searchMovies } from '../services/movies'
import { Movie } from '../types/movies-api'

export function useMovieSearch(query: string, firstPage = 1) {
  const [page, setPage] = useState(firstPage)
  const [pageCount, setPageCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<unknown>()
  const [movies, setMovies] = useState<Movie[]>([])

  const fetchMovies = useCallback(async () => {
    setLoading(true)
    try {
      const { results, total_pages } = await searchMovies(query, page)
      setMovies(results)
      setPageCount(total_pages)
    } catch (err: unknown) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [page, query])

  useEffect(() => void fetchMovies(), [fetchMovies])

  return { loading, error, movies, page, setPage, pageCount, fetchMovies }
}
