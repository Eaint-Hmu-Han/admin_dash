import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faFlag,
  faGhost,
  faHome,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className="container-fluid">
      <div className="row g-0">
        <nav className="col-2 bg-light pe-3">
          <h1 className="h4 py-3 text-center text-primary">
            <FontAwesomeIcon icon={faGhost} />
            <span className="d-none d-lg-inline">ADMIN</span>
          </h1>
        </nav>
        <div className="list-group text-center text-lg-start">
          <span className="list-group-item disabled d-none d-lg-block">
            <small>CONTROLS</small>
          </span>
          <a href="#" className="list-group-item list-group-item-action active">
            <FontAwesomeIcon icon={faHome} />
            <span className="d-none d-lg-inline">Dashboard</span>{" "}
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <FontAwesomeIcon icon={faUsers} />
            <span className="d-none d-lg-inline">Users</span>
            <span className="d-none d-lg-inline badge bg-danger rounded-pill float-end">
              20
            </span>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <FontAwesomeIcon icon={faChartLine} />
            <span className="d-none d-lg-inline">Statistics</span>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <FontAwesomeIcon icon={faFlag} />
            <span className="d-none d-lg-inline">Reports</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
