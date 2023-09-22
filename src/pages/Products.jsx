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

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    closeModal();
  }, []);
  useEffect(() => {
    openModal();
  }, []);

  const handledelete = async (item) => {
    const response = await axios({
      method: "delete",
      url: `${import.meta.env.SUPABASE_URL}/storage/v1/object/product/${
        item.image
      }`,
      headers: {
        "Content-Type": "application/json",
        apikey: `${import.meta.env.SUPABASE_KEY}`,
      },
    });
    console.log(response.data);

    const productDelete = async (item) => {
      await axios({
        method: "delete",
        url: `${import.meta.env.VITE_API_URL}/admin/Product/${item.id}`,
      });
    };

    productDelete(item);
  };

  useEffect(() => {
    handledelete();
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
  }, []);

  return (
    product && (
      <section id="products">
        <div className="p-4 d-flex justify-content-between align-items-center">
          <h2 className="fw-bold m-0">Products</h2>

          {<FormUs />}
        </div>
        <div className="row mx-4 chart">
          <table className="table text-center ">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">Stock</th>
                <th scope="col">Top</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {product.map((item, id) => (
                <tr key={id}>
                  <td>
                    <img
                      className="img-fluid img-thumbnail p-0"
                      src={`https://mcbzesritumxqjtbullp.supabase.co/storage/v1/object/public/products/${item.image}?//t=2023-09-19T13%3A20%3A01.474Z`}
                    />
                  </td>
                  <td className="col">{item.name}</td>
                  <td className="col">{item.price}</td>
                  <td className="col">
                    {item.description.substring(0, 20)}...
                  </td>
                  <td className="col">{item.category}</td>
                  <td className="col">{item.stock}</td>
                  <td className="col">{item.top === true ? "SI" : "NO"}</td>

                  <td className="col">
                    <AiFillDelete
                      item={item}
                      className=" action-icon"
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
            <Button className="main-button" onClick={handledelete()}>
              Understood
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    )
  );
}

export default Products;
