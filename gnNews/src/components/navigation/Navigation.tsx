import { useState } from 'react'
import NavigationSearchBar from './NavigationSearchBar'
import NavigationList from './NavigationList'
import '../../styles/navigation/Navigation.scss'

const Navigation = () => {
  const [search, setSearch] = useState<string>('')

  return (
    <nav>
      <NavigationSearchBar value={search} setValue={setSearch} />
      <NavigationList searched={search} />
    </nav>
  )
}

export default Navigation
