import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import './App.scss'

import Header from './components/header/Header'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  )
}

export default App
