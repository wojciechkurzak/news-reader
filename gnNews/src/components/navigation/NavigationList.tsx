import { NavigationListProps } from '../../types/navigation-types'
import countries from '../../data/countries.json'
import NavigationListItem from './NavigationListItem'
import '../../styles/navigation/NavigationList.scss'

const NavigationList = ({ searched }: NavigationListProps) => {
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searched.toLowerCase())
  )

  return (
    <ul>
      {filteredCountries.map((country) => (
        <NavigationListItem
          country={country.name}
          imageUrl={country.file_url}
          alpha={country.alpha2}
          key={country.alpha2}
        />
      ))}
    </ul>
  )
}

export default NavigationList
