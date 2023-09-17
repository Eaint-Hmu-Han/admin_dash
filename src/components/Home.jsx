import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faChartLine,
  faChartPie,
  faFilter,
  faSearch,
  faSort,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid mt-3 p-4">
        {/* Adding Stats Blocks */}
        <div className="row flex-column flex-lg-row mx-2">
          <h2 className="h6 text-white-50">QUICK STATS</h2>
          <div className="col">
            <div className="card mb-3">
              <div className="card-body p-2">
                <h3 className="card-title h2">1,250</h3>
                <span className="text-success">
                  <FontAwesomeIcon icon={faChartLine} />
                  Daily visitors
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="card-body px-2 py-2">
                <h3 className="card-title h2">8,210</h3>
                <span className="text-success">
                  <FontAwesomeIcon icon={faChartLine} />
                  Weekly visitors
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="card-body px-2 py-2">
                <h3 className="card-title h2">12,560</h3>
                <span className="text-success">
                  <FontAwesomeIcon icon={faChartLine} />
                  Monthly visitors
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="card-body px-2 py-2">
                <h3 className="card-title h2">102,250</h3>
                <span className="text-success">
                  <FontAwesomeIcon icon={faChartLine} />
                  Yearly visitors
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Adding Location and Data Blocks */}
        <div className="row mt-4 mx-2 flex-column flex-lg-row">
          <div className="col">
            <h2 className="h6 text-white-50">LOCATION</h2>
            <div className="card mb-3 p-2">
              <div className="card-body">
                <small className="text-muted">Regional</small>
                <div className="progress mb-4 mt-2">
                  <div className="progress-bar bg-success w-25"></div>
                </div>
                <small className="text-muted">Global</small>
                <div className="progress mb-4 mt-2">
                  <div className="progress-bar bg-primary w-75"></div>
                </div>
                <small className="text-muted">Local</small>
                <div className="progress mb-4 mt-2">
                  <div className="progress-bar bg-warning w-50"></div>
                </div>
                <small className="text-muted">Internal</small>
                <div className="progress mb-4 mt-2">
                  <div className="progress-bar bg-danger w-25"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <h2 className="h6 text-white-50">DATA</h2>
            <div className="card mb-3 p-2">
              <div className="card-body">
                <div className="text-end">
                  <button className="btn btn-sm btn-outline-secondary">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                  <button className="btn btn-sm btn-outline-secondary">
                    <FontAwesomeIcon icon={faSort} />
                  </button>
                  <button className="btn btn-sm btn-outline-secondary">
                    <FontAwesomeIcon icon={faFilter} />
                  </button>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Age Group</th>
                      <th>Data</th>
                      <th>Progress</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>20-30</td>
                      <td>19%</td>
                      <td>
                        <FontAwesomeIcon icon={faChartPie} />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>30-40</td>
                      <td>40%</td>
                      <td>
                        <FontAwesomeIcon icon={faChartBar} />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>40-50</td>
                      <td>20%</td>
                      <td>
                        <FontAwesomeIcon icon={faChartLine} />
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>50</td>
                      <td>11%</td>
                      <td>
                        <FontAwesomeIcon icon={faChartPie} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
