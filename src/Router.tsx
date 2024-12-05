import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailsPage from './pages/Details'
import FavoritesPage from './pages/Favorites'
import HomePage from './pages/Home'
import PageMoviePage from './pages/PageMovie'
import SearchPage from './pages/Search'
import { Navbar } from './components/navbar'

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page/:page" element={<PageMoviePage />} />
        <Route path="/movie/:id" element={<DetailsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/:page" element={<SearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
