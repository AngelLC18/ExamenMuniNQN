import Modal from "../../../../components/modals/Modal";
import { useModal } from "../../../../hooks/useModal";
import ModalCursos from "./ModalCursos";
const Modals = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <div>
      <button onClick={openModal} className="rounded-3xl w-10 p-2 bg-slate-100">
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <ModalCursos />
      </Modal>
    </div>
  );
};

export default Modals;
