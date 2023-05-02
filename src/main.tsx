import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LanguageWrapper from './languages/config/LanguageWrapper'
import { routesConfig } from './routesConfig'

const router = createBrowserRouter(routesConfig)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <LanguageWrapper>
      <RouterProvider router={router} />
    </LanguageWrapper>
  </Provider>
)
