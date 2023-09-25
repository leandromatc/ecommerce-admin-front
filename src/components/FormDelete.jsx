import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router";

function FormDelete(item) {
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState(item);
  const [showModal, setShowModal] = useState(false);
  const [id] = useState(dataUser.item._id);
  const [image] = useState(dataUser.item.image);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    setDataUser(item);
  }, [dataUser]);

  async function handleDelete(dataUser) {
    handleClose();
    await axios({
      method: "delete",
      url: `${import.meta.env.VITE_API_URL}/products/${id}`,
      data: { image },
    });
  }

  return (
    <>
      <AiFillDelete className="action-icon" onClick={handleShow} />
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        data={item}
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
          <Button className="main-button" onClick={handleDelete}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormDelete;
