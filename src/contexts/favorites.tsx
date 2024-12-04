/* eslint-disable react-refresh/only-export-components */
import type { PropsWithChildren } from 'react'
import { createContext, useContext } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import { Movie } from '../types/movies-api'

type FavoriteMovie = Pick<
  Movie,
  'id' | 'overview' | 'poster_path' | 'title' | 'release_date' | 'vote_average' | 'vote_count'
>

export interface FavoritesCtx {
  favorites: FavoriteMovie[]
  toggleFavorite: (movie: FavoriteMovie) => void
}

export const FavoritesContext = createContext<FavoritesCtx | undefined>(undefined)

export function FavoritesProvider({ children }: PropsWithChildren) {
  const [favorites, setFavorites] = useLocalStorageState<FavoriteMovie[]>('favorites', { defaultValue: [] })

  const toggleFavorite = (movie: FavoriteMovie) => {
    const index = favorites.findIndex((favorite) => favorite.id === movie.id)

    if (index === -1) {
      setFavorites([...favorites, movie])
    } else {
      setFavorites(favorites.filter((favorite) => favorite.id !== movie.id))
    }
  }

  return <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>{children}</FavoritesContext.Provider>
}

export function useFavorites() {
  const context = useContext(FavoritesContext)

  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }

  return context
}
