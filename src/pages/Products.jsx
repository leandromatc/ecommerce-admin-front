import { useEffect, useState } from "react";
import "./Users.css";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
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
                <th scope="col-1">Image</th>
                <th scope="col-1">Name</th>
                <th scope="col-1">Price</th>
                <th scope="col-1">Description</th>
                <th scope="col-1">Category</th>
                <th scope="col-1">Stock</th>
                <th scope="col-1">Top</th>
                <th scope="col-1">Slug</th>
              </tr>
            </thead>
            <tbody>
              {product.map((item, id) => (
                <tr key={id}>
                  <td>
                    <img
                      className="img-fluid img-thumbnail"
                      src={`https://mcbzesritumxqjtbullp.supabase.co/storage/v1/object/public/products/${item.image}?//t=2023-09-19T13%3A20%3A01.474Z`}
                    />
                  </td>
                  <td className="col">{item.name}</td>
                  <td className="col">{item.price}</td>
                  <td className="col">{item.description}</td>
                  <td className="col">{item.category}</td>
                  <td className="col">{item.stock}</td>
                  <td className="col">{item.top === true ? "SI" : "NO"}</td>

                  <td className="col-1">
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
