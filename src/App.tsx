import './App.css'
import Footer from './layout/Footer/Footer'
import Header from './layout/Header/Header'
import HomePage from './pages/Homepage/Homepage'
import Projects from './pages/Projects/Projects'

function App() {

  return (
    <>
      <Header />
      {/* <main> */}
      <HomePage />
      <Projects />
      {/* </main> */}
      <Footer />
    </>
  )
}

export default App