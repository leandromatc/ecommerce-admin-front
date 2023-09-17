import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { AiOutlinePlusCircle } from "react-icons/ai";

function FormUs() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState(null);
  const [stock, setStock] = useState("");
  const [top, setTop] = useState("");

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realizar acciones con los datos, por ejemplo, enviarlos a un servidor
    console.log("Nombre:", name);
    console.log("Price:", price);
    console.log("Foto:", image);
    console.log("description:", description);
    console.log("Stock:", stock);
    console.log("Top:", top);
    handleClose();
  };

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
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
              <Form.Label>Pop :</Form.Label>
              <Form.Control
                type="boolean"
                value={top}
                onChange={(e) => setTop(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Foto :</Form.Label>
              <Form.Control
                type="file"
                onChange={handleFotoChange}
                accept="image/*"
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
