import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContent from './components/main/MainContent/MainContent'
import ErrorPage from './components/misc/ErrorPage/ErrorPage'
import LanguageWrapper from './languages/config/LanguageWrapper'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MainContent />,
      },
      {
        path: '/country/:country',
        element: <MainContent />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <LanguageWrapper>
      <RouterProvider router={router} />
    </LanguageWrapper>
  </Provider>
)
