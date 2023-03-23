import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
import { Outlet } from 'react-router-dom'
import './styles/App.scss'

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <div className='content-container'>
        <Navigation />
        <Outlet />
      </div>
    </div>
  )
}

export default App
