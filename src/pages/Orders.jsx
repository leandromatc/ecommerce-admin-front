import { useEffect, useState } from "react";
import "./Users.css";
import axios from "axios";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import ModalOrder from "./ModalOrder";
import Form from "react-bootstrap/Form";

function Orders() {
  const [orders, setOrders] = useState(null);
  const [selectedCart, setSelectedCart] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_API_URL}/orders`,
      });
      setOrders(response.data);
    };
    getOrders();
  }, []);
  return (
    orders && (
      <section id="users">
        <div className="p-4 d-flex justify-content-between align-items-center">
          <h2 className="fw-bold m-0">Orders</h2>
          <Link to={`new`}>
            <button className=" main-button">
              <AiOutlinePlusCircle className="me-1" />
              New order
            </button>
          </Link>
        </div>
        <div className="row ms-4 chart">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">User</th>
                <th scope="col">Date</th>
                <th scope="col">Cart</th>
                <th scope="col">Total price</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.user}</td>
                  <td>{order.createdAt}</td>
                  <td>
                    {" "}
                    <NavLink
                      className="main-button"
                      onClick={() => {
                        handleShow();
                        setSelectedCart(order.cart);
                      }}
                    >
                      View order
                    </NavLink>
                    <ModalOrder
                      handleClose={handleClose}
                      show={show}
                      cart={selectedCart}
                    />
                  </td>
                  <td>{order.totalPrice}</td>
                  <td>
                    <Form.Select aria-label="Default select example">
                      <option value="1">Pending</option>
                      <option value="2">Delivered</option>
                      <option value="3">Cancelled</option>
                    </Form.Select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    )
  );
}

export default Orders;
