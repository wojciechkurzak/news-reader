import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
import { Outlet } from 'react-router-dom'
import './styles/App.scss'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <div className='content-container'>
        <Navigation />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
