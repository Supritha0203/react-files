import React from "react";
import { Link , useNavigate} from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout =()=>{
localStorage.removeItem("authToken")
navigate('/login')
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand fs-1 fst-italic mx-4" to="/">
          Swahar
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-3 mt-2 mt-lg-0 me-auto mb-2">
            <li className="nav-item active">
              <Link className="nav-link fs-5 active" to="/">
                Home
              </Link>
            </li>
            {(localStorage.getItem("authToken"))?
            <li className="nav-item active">
            <Link className="nav-link fs-5 active" to="/">
              My Orders
            </Link>
          </li>:""}
          </ul>
          {(!localStorage.getItem("authToken"))?
            <div className="d-flex mr-3">
            
            <Link className="btn bg-white text-success mx-1" to="/createuser">
              Signup
            </Link>
            <Link className="btn bg-white text-success mx-1" to="/login">
              Login
            </Link>
          </div>:
          <>
          <div className="btn bg-white text-success mx-2">
Cart
          </div>
          <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>
Logout
          </div></>
          
          }
          
        </div>
      </nav>
    </>
  );
}
