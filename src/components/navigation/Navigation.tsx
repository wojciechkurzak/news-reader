import { useState } from 'react'
import NavigationSearchBar from './NavigationSearchBar'
import NavigationList from './NavigationList'
import { useAppSelector } from '../../redux/hooks'
import NavigationLanguages from './NavigationLanguages'
import '../../styles/navigation/Navigation.scss'

const Navigation = () => {
  const [search, setSearch] = useState<string>('')

  const menuVisible = useAppSelector((state) => state.menuVisible.visible)

  return (
    <nav className={menuVisible ? 'menu-opened' : undefined}>
      <div>
        <NavigationSearchBar value={search} setValue={setSearch} />
        <NavigationList searched={search} />
      </div>
      <NavigationLanguages />
    </nav>
  )
}

export default Navigation
