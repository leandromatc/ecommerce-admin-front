import { Outlet, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "./Dashboard";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-nav">
        <Navbar />
      </div>
      <div className="home-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
