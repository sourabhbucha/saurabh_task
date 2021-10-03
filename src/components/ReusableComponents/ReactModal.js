import React from "react";
import Modal from "react-modal";
import "./ReactModal.css";
Modal.setAppElement("body");

const ReactModal = ({ body, setIsOpen, modalIsOpen }) => {
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // className="modal-view"
        style={{
          overlay: {
            background: "rgba(0, 0, 0, 0.85)",
          },
          content: {
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            outline: "none",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            background: "transparent",
            width: "90%",
          },
        }}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={false}
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        {/* <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form> */}

        {body}
      </Modal>
    </div>
  );
};

export default ReactModal;
