import movie from '../../assets/movie.svg'

export function Navbar() {
  return (
    <div className="h-20 fixed left-0 right-0 top-0">
      <div className="flex items-center gap-6 container mx-auto h-full px-8">
        <a href="/" className="flex flex-1 items-center gap-6">
          <img src={movie} alt="Ícone de filme" className="h-8" />
          <h1 className="text-2xl font-medium">Filmes</h1>
        </a>
        <div>
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
