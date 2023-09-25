import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { AiOutlinePlusCircle } from "react-icons/ai";
import axios from "axios";

function FormUs() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [top, setTop] = useState("");
  const [slug, setSlug] = useState("");

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre:", name);
    console.log("Price:", price);
    console.log("Foto:", image);
    console.log("description:", description);
    console.log("Stock:", stock);
    console.log("Stock:", category);
    console.log("Top:", top);
    console.log("Slug:", slug);
    sendInfo();
    handleClose();
  };

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  //mandar nuevo producto a bd
  const sendInfo = async () => {
    const sendInfo = {
      name,
      price,
      description,
      category,
      top,
      slug,
      image,
      stock,
    };

    const response = await axios({
      method: "post",
      url: `${import.meta.env.VITE_API_URL}/products`,
      data: sendInfo,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data);
  };

  return (
    <div>
      <Button className="main-button" onClick={handleShow}>
        <AiOutlinePlusCircle className="me-1" /> New Product
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario con Foto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Price :</Form.Label>
              <Form.Control
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description :</Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId=" stock">
              <Form.Label> Stock :</Form.Label>
              <Form.Control
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="top">
              <Form.Label>Top (si o no ):</Form.Label>
              <Form.Control
                type="boolean"
                value={top}
                onChange={(e) => setTop(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>Category :</Form.Label>
              <Form.Control
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>Slug :</Form.Label>
              <Form.Control
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Foto :</Form.Label>
              <Form.Control
                type="file"
                onChange={handleFotoChange}
                accept="imgs/product/*"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FormUs;
