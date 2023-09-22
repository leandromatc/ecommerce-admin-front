import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

function FormDelete(item) {
  const [dataUser, setDataUser] = useState(item);
  const [showModal, setShowModal] = useState(false);
  const [id] = useState(dataUser.item._id);
  const [image] = useState(dataUser.item.image);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    setDataUser(item);
  }, [dataUser]);

  async function handledelete(dataUser) {
    console.log("vino item =>", image, id);
    await axios({
      method: "delete",
      url: `http://localhost:3000/admin/Product/${id}/${image}`,
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
          <Button className="main-button" onClick={handledelete}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormDelete;
