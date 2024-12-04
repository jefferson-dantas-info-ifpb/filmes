import { useParams } from 'react-router-dom'
import HomePage from './Home'

export default function PageMoviePage() {
  const params = useParams()
  return <HomePage page={+params.page!} />
}
