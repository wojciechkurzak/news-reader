import { NavigationSearchBarProps } from '../../types/navigation-types'
import '../../styles/navigation/NavigationSearchBar.scss'

const NavigationSearchBar = ({ value, setValue }: NavigationSearchBarProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
  }

  return (
    <div className='navigation-search-bar'>
      <input
        type='text'
        value={value}
        onChange={handleChange}
        placeholder='Search'
      />
    </div>
  )
}

export default NavigationSearchBar
