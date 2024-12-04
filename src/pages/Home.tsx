import { MovieCard } from '../components/common/movie-card'
import { MovieSkeleton } from '../components/common/movie-skeleton'
import { Pagination } from '../components/common/pagination'
import { useMovies } from '../hooks/use-movies'

export default function HomePage({ page = 1 }: { page?: number }) {
  const { loading, movies, pageCount } = useMovies(page)

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 gap-y-10">
        {Array(20).fill(<MovieSkeleton />)}
      </div>
    )
  }

  return (
    <div className="container mx-auto p-8">
      <div className="h-20" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 gap-y-10">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>

      <Pagination page={page} pageCount={pageCount} />
    </div>
  )
}
