import styles from "./Modal.module.css";

const Modal = ({ setIsOpen, deleteRecord }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>حذف ردیف</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="closeIcon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className={styles.modalContent}>
            آیا از حذف این ردیف مطمعن هستید؟
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.deleteBtn} onClick={deleteRecord}>
                حذف
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
