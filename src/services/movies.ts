import { GetMoviesAPIResponse, MovieDetails } from '../types/movies-api'
import api from './api'

export const getMovies = async (page = 1) => {
  const { data } = await api.get<GetMoviesAPIResponse>('movie/now_playing', {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
      language: 'pt-BR',
      page
    }
  })

  return data
}

export const getMovieDetails = async (movieId: number) => {
  const { data } = await api.get<MovieDetails>('movie/' + movieId, {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
      language: 'pt-BR'
    }
  })

  return data
}

export const searchMovies = async (query: string, page = 1) => {
  const { data } = await api.get<GetMoviesAPIResponse>('search/movie', {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
      language: 'pt-BR',
      query,
      page
    }
  })

  return data
}
