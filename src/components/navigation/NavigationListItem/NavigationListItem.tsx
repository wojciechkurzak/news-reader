import { NavigationListItemProps } from '../../../types/navigation-types'
import { NavLink } from 'react-router-dom'
import { useAppDispatch } from '../../../redux/hooks'
import { changeMenuVisible } from '../../../redux/features/menu-visible-slice'
import './NavigationListItem.scss'

const NavigationListItem = ({
  children,
  imageUrl,
  alpha,
}: NavigationListItemProps) => {
  const dispatch = useAppDispatch()

  const handleCloseMenu = (): void => {
    dispatch(changeMenuVisible(false))
  }

  return (
    <li className='navigation-list-item'>
      <NavLink
        to={`/country/${alpha.toLowerCase()}`}
        onClick={handleCloseMenu}
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        <img src={imageUrl} alt='flag' />
        <p>{children}</p>
      </NavLink>
    </li>
  )
}

export default NavigationListItem
