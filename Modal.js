import { useState } from "react";
import { createPortal } from "react-dom";

export default function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Show modal</button>
      {showModal &&
        createPortal(
          <div className="modal">
            <div>I'm a modal</div>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>,
          document.body
        )}
    </>
  );
}
