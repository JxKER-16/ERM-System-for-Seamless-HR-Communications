import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App