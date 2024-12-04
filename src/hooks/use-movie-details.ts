import { useCallback, useEffect, useState } from 'react'
import { getMovieDetails } from '../services/movies'
import { MovieDetails } from '../types/movies-api'

export function useMovieDetails(movieId: number) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<unknown>()
  const [movie, setMovie] = useState<MovieDetails>()

  const fetchMovieDetails = useCallback(async () => {
    setLoading(true)
    try {
      const movieDetails = await getMovieDetails(movieId)
      setMovie(movieDetails)
    } catch (err: unknown) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [movieId])

  useEffect(() => void fetchMovieDetails(), [fetchMovieDetails])

  return { loading, error, movie, fetchMovieDetails }
}
