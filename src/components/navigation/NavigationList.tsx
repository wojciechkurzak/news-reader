import { NavigationListProps } from '../../types/navigation-types'
import countries from '../../data/countries.json'
import NavigationListItem from './NavigationListItem'
import { FormattedMessage } from 'react-intl'
import '../../styles/navigation/NavigationList.scss'
import { useAppSelector } from '../../redux/hooks'

const NavigationList = ({ searched }: NavigationListProps) => {
  const locale = useAppSelector((state) => state.languageChange.lang)

  const filteredCountries = countries.filter((country) =>
    locale === 'pl-PL'
      ? country.name_pl.toLowerCase().includes(searched.toLowerCase())
      : country.name_en.toLowerCase().includes(searched.toLowerCase())
  )

  return (
    <ul>
      {filteredCountries.map((country) => (
        <NavigationListItem
          imageUrl={country.file_url}
          alpha={country.alpha2}
          key={country.alpha2}
        >
          <FormattedMessage
            id={`navigation.${country.alpha2.toLowerCase()}`}
            defaultMessage={country.name_en}
          />
        </NavigationListItem>
      ))}
    </ul>
  )
}

export default NavigationList
