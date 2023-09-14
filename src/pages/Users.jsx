import { useEffect, useState } from "react";
import "./Users.css";
import axios from "axios";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { MdEdit } from "react-icons/md";

function Users() {
  const [users, setUsers] = useState(null);
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
          <h2 className="fw-bold">Users</h2>
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
                    <MdEdit className="me-4 action-icon" />
                    <AiFillDelete className="action-icon delete-icon" />
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

export default Users;
