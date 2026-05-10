import Home from './assets/components/Home'
import About from './assets/components/About'
import Projects from './assets/components/Project'
import Contact from './assets/components/Contact'
import Email from './assets/components/Email'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'


function App() {
  return (
    <>
      <Router>
         <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Email">Email</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Email" element={<Email />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
