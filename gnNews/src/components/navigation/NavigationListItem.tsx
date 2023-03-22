import { NavigationListItemProps } from '../../types/navigation-types'
import { useNavigate, NavLink } from 'react-router-dom'
import '../../styles/navigation/NavigationListItem.scss'

const NavigationListItem = ({
  country,
  imageUrl,
  alpha,
}: NavigationListItemProps) => {
  const navigate = useNavigate()

  return (
    <li className='navigation-list-item'>
      <NavLink
        to={`/country/${alpha.toLowerCase()}`}
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        <img src={imageUrl} alt='flag' />
        <p>{country}</p>
      </NavLink>
    </li>
  )
}

export default NavigationListItem
