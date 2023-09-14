import { useEffect, useState } from "react";
import "./Users.css";
import axios from "axios";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";

function Users() {
  const [users, setUsers] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userDelete = async (userId) => {
    const response = await axios({
      method: "DELETE",
      url: `${import.meta.env.VITE_MAIN_URL}/users/${userId}`,
    });
    setUsers(users.filter((user) => user._id !== userId));
  };

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_MAIN_URL}/users`,
      });
      setUsers(response.data);
    };
    getUsers();
  }, []);
  return (
    users && (
      <section id="users">
        <div className="p-4 d-flex justify-content-between align-items-center">
          <h2 className="fw-bold m-0">Users</h2>
          <button className=" main-button">
            <AiOutlinePlusCircle className="me-1" />
            New user
          </button>
        </div>
        <div className="row ms-4 chart">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.firstname}</td>
                  <td>
                    {} {user.lastname}
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <MdEdit className="me-4 action-icon" onClick={handleShow} />
                    <AiFillDelete
                      className="action-icon delete-icon"
                      onClick={() => userDelete(user._id)}
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
            <Modal.Title>Delete user</Modal.Title>
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

export default Users;
