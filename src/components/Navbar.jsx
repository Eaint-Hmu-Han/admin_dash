import {
  faCog,
  faDownload,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="flex-fill">
        <div className="navbar nav">
          <li className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <FontAwesomeIcon icon={faUserCircle} />
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#" className="dropdown-item">
                  User Profile
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  Logout
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={faCog} />
            </a>
          </li>
        </div>
        <div className="container-fluid mt-3 p-4">
          <div className="flex-fill">
            <div className="col">
              <div className="alert alert-info">
                <FontAwesomeIcon icon={faDownload} /> A new version of the admin
                dashboard is released.
                <a href="#">Download Now!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
