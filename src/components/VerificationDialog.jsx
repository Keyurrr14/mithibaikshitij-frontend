const VerificationDialog = ({ isOpen, onClose, title, children }) => {
    return (
      <dialog className={`modal ${isOpen ? 'modal-open' : ''} font-montserrat`}>
        <div className="modal-box bg-white w-11/12 max-w-xl p-4 sm:p-6">
          {title && (
            <h1 className="text-xl sm:text-2xl font-semibold text-center text-black mb-4">
              {title}
            </h1>
          )}
          {children}
          <div className="modal-action mt-6">
            <button
              type="button"
              className="btn bg-gray-200 border-none text-black hover:bg-gray-300 text-sm sm:text-base"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop bg-black/60">
          <button onClick={onClose}>close</button>
          
        </form>
      </dialog>
    );
  };
  
  
  export default VerificationDialog;
  