import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand navbar-light bg-light">
        <div class="container-fluid">
           <Link to="/" className="navbar-brand" a>Home List</Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/addItem" className="nav-link active" aria-current="page" a><li>Add Item</li></Link>
              </li>
              <li class="nav-item">
                <Link to="/updateItem" className="nav-link active" aria-current="page" a><li>Update Item</li></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
