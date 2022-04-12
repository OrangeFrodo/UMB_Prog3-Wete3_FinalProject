import { FaSignInAlt, FaSignOutAlt, FaUser, FaBrain } from "react-icons/fa"
import { Link } from "react-router-dom"

// Import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/employee">Employee setter</Link>
      </div>
      <ul>
        <li>
          <Link to="/">
            <FaBrain />Employee
          </Link>
        </li>
        {/* <li>
          <Link to="/login">
            <FaSignInAlt />Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUser />Register
          </Link>
        </li> */}
      </ul>
    </header>
  )
}

export default Header