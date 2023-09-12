import { Outlet } from "react-router-dom";
import "./Dashboard.css";
import {
  BiSolidDollarCircle,
  BiSolidCart,
  BiSolidPurchaseTag,
} from "react-icons/bi";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import UserChart from "../components/UserChart";
import VisitorsChart from "../components/VisitorsChart";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="content">
        <div className="header">
          <div>
            <h3>Hello, Juan Pérez</h3>
            <small>This are the statistics for today!</small>
          </div>
          <button className="main-button">
            <MdOutlineAddCircleOutline className="btn-icon" />
            Add product
          </button>
        </div>
        <div className="statistics">
          <div className="statistics-card">
            <BiSolidDollarCircle className="statistics-icon" />
            <div>
              <small>Total sales</small>
              <h4 className="statistics-number">$1,120,000,000</h4>
            </div>
          </div>
          <div className="statistics-card">
            <BiSolidCart className="statistics-icon" />
            <div>
              <small>Total orders</small>
              <h4 className="statistics-number">124</h4>
            </div>
          </div>
          <div className="statistics-card">
            <BiSolidPurchaseTag className="statistics-icon" />
            <div>
              <small>Total products</small>
              <h4 className="statistics-number">59</h4>
            </div>
          </div>
        </div>
        <div className="charts-container">
          <div className="chart">
            <h5 className="h5-title">Users</h5>
            <UserChart />
          </div>
          <div className="chart">
            <h5 className="h5-title">Visitors</h5>
            <VisitorsChart />
          </div>
        </div>
        <section id="latest-orders">
          <h5 className="h5-title">Latest orders</h5>
          <table className="content-table">
            <tbody className="table-body">
              <tr>
                <td>1434</td>
                <td>Juan Pérez</td>
                <td>mail@mail.com</td>
                <td>$2,5</td>
                <td>
                  <span className="btn-status delivered">Delivered</span>
                </td>
                <td>12.09.2023</td>
              </tr>
              <tr>
                <td>1434</td>
                <td>Juan Pérez</td>
                <td>mail@mail.com</td>
                <td>$2,5</td>
                <td>
                  <span className="btn-status delivered">Delivered</span>
                </td>
                <td>12.09.2023</td>
              </tr>
              <tr>
                <td>1434</td>
                <td>Juan Pérez</td>
                <td>mail@mail.com</td>
                <td>$2,5</td>
                <td>
                  <span className="btn-status pending">Pending</span>
                </td>
                <td>12.09.2023</td>
              </tr>
              <tr>
                <td>1434</td>
                <td>Juan Pérez</td>
                <td>mail@mail.com</td>
                <td>$2,5</td>
                <td>
                  <span className="btn-status delivered">Delivered</span>
                </td>
                <td>12.09.2023</td>
              </tr>
              <tr>
                <td>1434</td>
                <td>Juan Pérez</td>
                <td>mail@mail.com</td>
                <td>$2,5</td>
                <td>
                  <span className="btn-status cancelled">Cancelled</span>
                </td>
                <td>12.09.2023</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
