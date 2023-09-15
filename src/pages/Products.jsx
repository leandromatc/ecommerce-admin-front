import { useEffect, useState } from "react";
import "./Users.css";
import axios from "axios";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Products() {
  const [product, setProduct] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userDelete = async (productId) => {
    const response = await axios({
      method: "DELETE",
      url: `${import.meta.env.VITE_MAIN_URL}/product/${productId}`,
    });
    setProduct(product.filter((pro) => pro._id !== productId));
  };

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_MAIN_URL}/admin/Product`,
      });
      setProduct(response.data);
    };
    getProduct();
  }, []);
  return (
    product && (
      <section id="users">
        <div className="p-4 d-flex justify-content-between align-items-center">
          <h2 className="fw-bold m-0">Users</h2>
          <button className=" main-button">
            <AiOutlinePlusCircle className="me-1" />
            New product
          </button>
        </div>
        <div className="row ms-4 chart">
          <table className="table text-center border rounded shadow">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col"> Stock</th>
                <th scope="col">Top</th>
              </tr>
              {console.log("product", product)}
            </thead>
            <tbody>
              {product.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>{item.category}</td>
                  <td>{item.stock}</td>
                  <td>{item.top === true ? "SI" : "NO"}</td>
                  <td>
                    <MdEdit className="me-4 action-icon" onClick={handleShow} />
                    <AiFillDelete
                      className="action-icon delete-icon"
                      onClick={() => userDelete(item._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete products</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </section>
    )
  );
}

export default Products;
