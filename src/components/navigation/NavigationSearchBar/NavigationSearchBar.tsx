import { NavigationSearchBarProps } from '../../../types/navigation-types'
import { useAppSelector } from '../../../redux/hooks'
import './NavigationSearchBar.scss'

const NavigationSearchBar = ({ value, setValue }: NavigationSearchBarProps) => {
  const locale = useAppSelector((state) => state.languageChange.lang)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
  }

  return (
    <div className='navigation-search-bar'>
      <input
        type='text'
        value={value}
        onChange={handleChange}
        placeholder={locale === 'pl-PL' ? 'Szukaj' : 'Search'}
      />
    </div>
  )
}

export default NavigationSearchBar
