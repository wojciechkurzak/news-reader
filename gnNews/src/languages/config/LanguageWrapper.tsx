import { IntlProvider } from 'react-intl'
import Polish from '../pl.json'
import English from '../en.json'
import { useAppSelector } from '../../redux/hooks'

const LanguageWrapper = ({ children }: any) => {
  const locale = useAppSelector((state) => state.languageChange.lang)
  const messages = locale === 'pl-PL' ? Polish : English

  return (
    <IntlProvider messages={messages} locale={locale}>
      {children}
    </IntlProvider>
  )
}

export default LanguageWrapper
