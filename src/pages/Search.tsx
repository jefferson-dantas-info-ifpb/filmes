import { useParams, useSearchParams } from 'react-router-dom'
import { useMovieSearch } from '../hooks/use-movie-search'
import { MovieSkeleton } from '../components/common/movie-skeleton'
import { MovieCard } from '../components/common/movie-card'
import { Pagination } from '../components/common/pagination'

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')
  const { page } = useParams()
  const { loading, movies, pageCount } = useMovieSearch(query!, page ? +page : 1)

  if (loading) {
    return (
      <div className="container mx-auto p-8">
        <div className="h-20" />

        <h1 className="text-5xl mb-12">Resultados para "{query}"</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 gap-y-10">
          {Array(20).fill(<MovieSkeleton />)}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-8">
      <div className="h-20" />

      <h1 className="text-5xl mb-12">Resultados para "{query}"</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 gap-y-10">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>

      <Pagination page={page ? +page : 1} pageCount={pageCount} isSearch />
    </div>
  )
}
