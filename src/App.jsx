import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 gap-0 pe-3">
          <SideBar />
        </div>
        <div className="col-9 px-0">
          <Home />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
