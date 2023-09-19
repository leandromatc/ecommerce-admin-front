import React from "react";

import Modal from "react-bootstrap/Modal";

function ModalOrder({ handleClose, show, cart }) {

  return (
    cart && (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              {cart.length > 0 && cart.map((product,id) => (
                <li key={id}>
                  {product.name} : {product.quantity}
                </li>
              ))}
            </ul>
          </Modal.Body>
        </Modal>
      </>
    )
  );
}

export default ModalOrder;
