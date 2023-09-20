import { useEffect, useState } from "react";
import "./Users.css";
import axios from "axios";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiFillDelete,
} from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FormUs from "../components/FormUs";
import FormUp from "../components/FormUp";

function Products() {
  const [product, setProduct] = useState(null);
  const [show, setShow] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productDelete = async (productId) => {
    await axios({
      method: "delete",
      url: `${import.meta.env.VITE_API_URL}/admin/Product/${productId}`,
    });
  };

  const productAdd = async (productId) => {
    await axios({
      method: "get",
      url: `${import.meta.env.VITE_API_URL}/admin/store/Product/${productId}`,
    });
  };

  // const handleDelete = () => {
  //   productDelete();
  // };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // useEffect(() => {
  //   productDelete();
  // }, []);
  useEffect(() => {
    closeModal();
  }, []);
  useEffect(() => {
    openModal();
  }, []);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_API_URL}/admin/Product`,
      });
      setProduct(response.data);
    };
    getProduct();
  }, [productDelete]);

  return (
    product && (
      <section id="products">
        <div className="p-4 d-flex justify-content-between align-items-center">
          <h2 className="fw-bold m-0">Products</h2>

          {<FormUs className="me-1" />}
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
                <th scope="col">Slug</th>
              </tr>
            </thead>
            <tbody>
              {product.map((item, id) => (
                <tr key={id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>{item.category}</td>
                  <td>{item.stock}</td>
                  <td>{item.top === true ? "SI" : "NO"}</td>
                  <td>{item.slug}</td>
                  <td>
                    <AiFillDelete
                      className="me-4 action-icon"
                      onClick={handleShow}
                    />

                    {
                      <FormUp
                        onClick={openModal}
                        isOpen={modalIsOpen}
                        onClose={closeModal}
                        item={item}
                      />
                    }

                    <AiFillPlusCircle
                      className="action-icon create-icon"
                      onClick={() => productAdd(item._id)}
                    />
                    <AiFillMinusCircle
                      className="action-icon delete-icon"
                      onClick={() => productDelete(item._id)}
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
            <Button>Understood</Button>
          </Modal.Footer>
        </Modal>
      </section>
    )
  );
}

export default Products;
