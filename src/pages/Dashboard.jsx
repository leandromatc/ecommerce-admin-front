import { Outlet, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import {
  BiSolidDollarCircle,
  BiSolidCart,
  BiSolidPurchaseTag,
} from "react-icons/bi";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import UserChart from "../components/UserChart";
import VisitorsChart from "../components/VisitorsChart";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function Dashboard() {
  const admin = useSelector((state) => state.admin);
  const navigate = useNavigate();
  console.log(admin);

  const [productsQuantity, setProductsQuantity] = useState(null);
  const [ordersQuantity, setOrdersQuantity] = useState(null);

  useEffect(() => {
    if (!admin) {
      navigate("/");
    }
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/products`,
      });
      setProductsQuantity(response.data.products.length);
    };
    const getOrders = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/orders`,
      });
      setOrdersQuantity(response.data.length);
    };
    getProducts();
    getOrders();
  }, [admin]);

  return (
    productsQuantity && (
      <div className="dashboard">
        <div className="content">
          <div className="row header d-flex align-items-center">
            <div className="col-6">
              <h3 className="m-0 fw-bold">
                Hello, {admin.firstname} {admin.lastname} 👋
              </h3>
              <small>This are the statistics for today!</small>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <button className="main-button">
                <MdOutlineAddCircleOutline className="btn-icon" />
                Add product
              </button>
            </div>
          </div>
          <div className="row statistics gap-3">
            <div className="col statistics-card">
              <BiSolidDollarCircle className="statistics-icon" />
              <div>
                <small>Total sales</small>
                <h4 className="statistics-number">$1,120</h4>
              </div>
            </div>
            <div className="col statistics-card">
              <BiSolidCart className="statistics-icon" />
              <div>
                <small>Total orders</small>
                <h4 className="statistics-number">{ordersQuantity}</h4>
              </div>
            </div>
            <div className="col statistics-card">
              <BiSolidPurchaseTag className="statistics-icon" />
              <div>
                <small>Total products</small>
                <h4 className="statistics-number">{productsQuantity}</h4>
              </div>
            </div>
          </div>
          <div className="charts-container row">
            <div className=" chart">
              <h5 className="h5-title">Users</h5>
              <UserChart />
            </div>
            <div className="w-100 col-xxl-6 chart">
              <h5 className="h5-title">Visitors</h5>
              <VisitorsChart />
            </div>
          </div>
          <section id="latest-orders" className="row">
            <h5 className="h5-title">Latest orders</h5>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Price</th>
                  <th scope="col">Order status</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1234</td>
                  <td>Ringo</td>
                  <td>mail@mail.com</td>
                  <td>$2,5</td>
                  <td>
                    <span className="btn-status delivered">Delivered</span>
                  </td>
                  <td>12.12.2023</td>
                </tr>
                <tr>
                  <td>1234</td>
                  <td>John</td>
                  <td>mail@mail.com</td>
                  <td>$2,5</td>
                  <td>
                    <span className="btn-status cancelled">Cancelled</span>
                  </td>
                  <td>12.12.2023</td>
                </tr>
                <tr>
                  <td>1234</td>
                  <td>George</td>
                  <td>mail@mail.com</td>
                  <td>$2,5</td>
                  <td>
                    <span className="btn-status pending">Pending</span>
                  </td>
                  <td>12.12.2023</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    )
  );
}

export default Dashboard;
