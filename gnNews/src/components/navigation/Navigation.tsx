import { useState } from 'react'
import NavigationSearchBar from './NavigationSearchBar'
import NavigationList from './NavigationList'
import '../../styles/navigation/Navigation.scss'
import { useAppSelector } from '../../redux/hooks'

const Navigation = () => {
  const [search, setSearch] = useState<string>('')

  const menuVisible = useAppSelector((state) => state.menuVisible.visible)

  return (
    <nav className={menuVisible ? 'menu-opened' : undefined}>
      <NavigationSearchBar value={search} setValue={setSearch} />
      <NavigationList searched={search} />
    </nav>
  )
}

export default Navigation
