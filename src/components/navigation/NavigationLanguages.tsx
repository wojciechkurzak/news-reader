import { changeLanguage } from '../../redux/features/language-change-slice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import '../../styles/navigation/NavigationLanguages.scss'

const NavigationLanguages = () => {
  const dispatch = useAppDispatch()

  const locale = useAppSelector((state) => state.languageChange.lang)

  const handleLanguageChange = (lang: any): void => {
    dispatch(changeLanguage(lang))
  }

  return (
    <div className='navigation-languages'>
      <button
        onClick={() => handleLanguageChange('pl-PL')}
        className={locale === 'pl-PL' ? 'active' : undefined}
      >
        PL
      </button>
      <button
        onClick={() => handleLanguageChange('en-US')}
        className={locale === 'en-US' ? 'active' : undefined}
      >
        EN
      </button>
    </div>
  )
}

export default NavigationLanguages
