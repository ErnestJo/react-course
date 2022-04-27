import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function DeleteHandler() {
    setModalIsOpen(true);
  }

  function CloseHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="action">
        <button className="btn" onClick={DeleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={CloseHandler} onConfirm={CloseHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={CloseHandler} />}
    </div>
  );
}
export default Todo;
