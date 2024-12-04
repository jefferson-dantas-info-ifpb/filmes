import { useParams } from 'react-router-dom'
import { useMovieDetails } from '../hooks/use-movie-details'
import { getImage } from '../services/images'
import { Rating } from '../components/common/rating'
import { useFavorites } from '../contexts/favorites'

export default function DetailsPage() {
  const { loading, movie } = useMovieDetails(+useParams().id!)
  const { favorites, toggleFavorite } = useFavorites()

  if (!movie || loading) return null

  const isFavorite = favorites.some((favorite) => favorite.id === movie.id)

  const handleToggleFavorite = (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    toggleFavorite(movie)
  }

  return (
    <div className="bg-cover" style={{ backgroundImage: `url("${getImage(movie.backdrop_path, 'w1280')}")` }}>
      <div className="bg-black bg-opacity-70">
        <div className="container mx-auto p-8">
          <div className="h-20" />

          <div className="flex gap-12">
            <div className="flex-1">
              <h1 className="text-7xl mb-4" title={movie.original_title}>
                {movie.title}
              </h1>

              <div className="text-xl font-bold mb-8">
                <span>{new Date(movie.release_date).getUTCFullYear()}</span>
                <span className="border-l-2 ml-4 pl-4">{movie.runtime} min</span>
              </div>

              <div className="text-2xl mb-8">{movie.overview}</div>

              {movie.genres.map((genre) => (
                <span className="mr-8 font-medium px-4 py-2 rounded-full ring-gray-300 ring-1" key={genre.id}>
                  {genre.name}
                </span>
              ))}

              <div className="mt-6 flex gap-6">
                <Rating voteAvg={movie.vote_average} voteCount={movie.vote_count} size={32} />

                <button
                  onClick={handleToggleFavorite}
                  className="flex items-center border-white border rounded-full p-2 pr-3 text-white font-medium hover:bg-white hover:text-black transition"
                >
                  {isFavorite ? (
                    <svg width="24px" fill="red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                    </svg>
                  ) : (
                    <svg width="24px" fill="orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                    </svg>
                  )}
                  <span className="ml-2">{isFavorite ? 'Favorito adicionado' : 'Adicionar aos favoritos'}</span>
                </button>
              </div>

              <div className="mt-12" hidden={!movie.homepage}>
                <a
                  className="bg-white rounded-full px-6 py-3 text-black text-2xl font-bold hover:bg-gray-200 active:bg-gray-400 transition"
                  href={movie.homepage}
                >
                  VISITAR PÁGINA
                </a>
              </div>

              <div className="text-xl mt-12 font-semibold">Produzido por:</div>
              <div className="flex gap-6 mt-4">
                {movie.production_companies.map((production_company) => (
                  <img
                    src={getImage(production_company.logo_path, 'original')}
                    className="h-8"
                    style={{ filter: 'invert(1)' }}
                  />
                ))}
              </div>
            </div>

            <div className="">
              <img
                src={getImage(movie.poster_path)}
                className="rounded-3xl"
                style={{ height: 'calc(100vh - 80px - 32px - 32px)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
