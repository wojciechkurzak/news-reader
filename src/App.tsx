import Header from './components/header/Header/Header'
import Navigation from './components/navigation/Navigation/Navigation'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import './App.scss'

const App = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
