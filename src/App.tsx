import './App.css'
import Footer from './layout/Footer/Footer'
import Header from './layout/Header/Header'
import Experience from './pages/Experience/Experience'
import HomePage from './pages/Homepage/Homepage'
import Projects from './pages/Projects/Projects'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

function App() {

  return (
    <>
      <Header />
      <HomePage />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App