import { useFavorites } from '../../contexts/favorites'
import { getImage } from '../../services/images'
import { Movie } from '../../types/movies-api'
import { Rating } from './rating'

export function MovieCard({ movie }: { movie: Movie }) {
  const { favorites, toggleFavorite } = useFavorites()
  const isFavorite = favorites.some((favorite) => favorite.id === movie.id)

  const handleToggleFavorite = (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    toggleFavorite(movie)
  }

  return (
    <a href={`/movie/${movie.id}`} title={movie.overview} key={movie.id}>
      <div className="relative transition hover:scale-110">
        <img src={getImage(movie.poster_path)} className="rounded-xl aspect-[2/3] w-full bg-slate-300" />
        <button
          onClick={handleToggleFavorite}
          className="bg-white rounded-full p-1 absolute right-2 top-2 shadow-md hover:bg-gray-200"
        >
          {isFavorite ? (
            <svg width="24px" fill="red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
            </svg>
          ) : (
            <svg width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
            </svg>
          )}
        </button>
      </div>

      <div className="text-center mt-4 font-medium text-lg">{movie.title}</div>

      <div className="text-center mt-0.5 text-xs">{new Date(movie.release_date).getUTCFullYear()}</div>

      <div className="text-center mt-2">
        <Rating voteAvg={movie.vote_average} voteCount={movie.vote_count} />
      </div>
    </a>
  )
}
