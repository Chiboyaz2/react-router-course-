import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/todos">Todos</Link></li>
        <li><Link to="/testing">Testing</Link></li>
        <li><Link to="/last-example">Last Example</Link></li>
      </ul>
    </nav>
  )
}