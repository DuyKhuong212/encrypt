
import './Modal.css';
import Modal from 'react-modal';
Modal.setAppElement('#root');
const ModalComponent = ({ isOpen, closeModal, children }:any) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className="modal-contents"
      overlayClassName="modal-overlays"
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
