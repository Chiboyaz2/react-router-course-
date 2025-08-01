import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Todos from './pages/Todos'
import TodoDetails from './pages/TodoDetails'
import Testing from './pages/Testing'
import LastEample from './pages/LastEample'
import Village  from './pages/Village'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/todos/:id" element={<TodoDetails />} />
          <Route path="/village" element={<Village />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/last-example" element={<LastEample />} />
        </Routes>
      </main>
    </div>
  )
}

export default App