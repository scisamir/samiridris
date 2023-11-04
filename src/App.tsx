import './App.css'
import Footer from './layout/Footer/Footer'
import Header from './layout/Header/Header'
import Experience from './pages/Experience/Experience'
import HomePage from './pages/Homepage/Homepage'
import Projects from './pages/Projects/Projects'

function App() {

  return (
    <>
      <Header />
      <HomePage />
      <Projects />
      <Experience />
      <Footer />
    </>
  )
}

export default App