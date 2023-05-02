import App from './App'
import MainContent from './components/main/MainContent/MainContent'
import ErrorPage from './components/misc/ErrorPage/ErrorPage'

export const routesConfig = [
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
]
