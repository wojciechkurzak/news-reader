import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import LanguageWrapper from './languages/config/LanguageWrapper'
import { routesConfig } from './routesConfig'

const router = createHashRouter(routesConfig)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // @ts-ignore
  <Provider store={store}>
    <LanguageWrapper>
      <RouterProvider router={router} />
    </LanguageWrapper>
  </Provider>
)
