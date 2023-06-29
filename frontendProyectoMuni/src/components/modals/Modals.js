import Modal from "./Modal";
import { useModal } from "../../hooks/useModal";
//import MuniModal from '../endpoint/MuniModal';
const Modals = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <div>
      <button onClick={openModal} className="rounded-3xl p-2 bg-slate-500">
        modal
      </button>
      <Modal isOpen={isOpenModal} closeModal={closeModal}></Modal>
    </div>
  );
};

export default Modals;
