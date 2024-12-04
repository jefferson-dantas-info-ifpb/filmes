import { Navbar } from './components/navbar'
import { FavoritesProvider } from './contexts/favorites'
import Router from './Router'

export default function App() {
  return (
    <FavoritesProvider>
      <Navbar />
      <Router />
    </FavoritesProvider>
  )
}
