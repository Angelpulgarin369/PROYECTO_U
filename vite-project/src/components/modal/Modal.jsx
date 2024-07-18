import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, title, children }) => {
  const modalClassName = `modal ${isOpen ? 'modal-show' : ''}`;

  return (
    <div className={modalClassName}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title">{title}</div>
          <button className="modal-close" onClick={onClose}>
          𝘾𝙚𝙧𝙧𝙖𝙧 𝙈𝙤𝙙𝙖𝙡
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

