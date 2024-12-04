import { MovieCard } from '../components/common/movie-card'
import { useFavorites } from '../contexts/favorites'
import { Movie } from '../types/movies-api'

export default function FavoritesPage() {
  const { favorites } = useFavorites()

  return (
    <div className="container mx-auto p-8">
      <div className="h-20" />

      <h1 className="text-5xl mb-12">Favoritos</h1>

      {favorites.length === 0 && <div className="text-2xl">Você não marcou nenhum filme como favorito</div>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 gap-y-10">
        {favorites.map((movie) => (
          <MovieCard movie={movie as Movie} key={movie.id} />
        ))}
      </div>
    </div>
  )
}
