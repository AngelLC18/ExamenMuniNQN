import './Modal.css';
const Modal = ({ children, isOpen, closeModal }) => {
  //función que evita los eventos de todo el arbol del modal
  const handleModalContainer = e => e.stopPropagation();

  return (
    <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
      <div
        className='relative p-4 h-auto w-auto bg-slate-50 dark:bg-slate-800 overflow-x-auto rounded-2xl'
        onClick={handleModalContainer}
      >
        <button
          name='close-outline'
          className='modal-close'
          onClick={closeModal}
        >
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
