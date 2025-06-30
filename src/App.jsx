import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import Middle from './components/Middle/Middle.jsx'
import Destinations from './components/Destinations/Destinations.jsx'
import Portifolio from './components/Portifolio/Portifolio.jsx'
import Reviews from './components/Reviews/Reviews.jsx'
import Questions from './components/Questions/Questions.jsx'
import Subscribe from './components/Subscribe/Subscribe.jsx'
import Footer from './components/Footer/Footer.jsx'
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Middle /> 
      <Destinations />
      <Portifolio />
      <Reviews />
      <Questions />
      <Subscribe />
      {/* <Footer /> */}
    </div>
  )
}

export default App
