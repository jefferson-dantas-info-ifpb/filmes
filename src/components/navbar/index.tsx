import { useSearchParams } from 'react-router-dom'
import movie from '../../assets/movie.svg'

export function Navbar() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')

  return (
    <div className="h-20 fixed left-0 right-0 top-0">
      <div className="flex items-center gap-6 container mx-auto h-full px-8">
        <div className="flex-1">
          <a href="/" className="flex items-center gap-6">
            <img src={movie} alt="Ícone de filme" className="h-8" />
            <h1 className="text-2xl font-medium">Filmes</h1>
          </a>
        </div>

        <div className="flex items-center gap-6">
          <form action="/search" method="get">
            <label className="flex items-center gap-2">
              <svg fill="white" width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>magnify</title>
                <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
              </svg>
              <input
                type="search"
                name="q"
                className="bg-transparent border-b-white border-b outline-none"
                placeholder="Pesquisar filmes..."
                defaultValue={query || ''}
              />
            </label>
          </form>
          <a href="/favorites" className="flex items-center">
            <svg width="24px" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
            </svg>
            <span className="ml-2 font-bold">Favoritos</span>
          </a>
        </div>
      </div>
    </div>
  )
}
