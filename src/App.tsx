import Header from './components/header/Header/Header'
import Navigation from './components/navigation/Navigation/Navigation'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import './App.scss'

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
