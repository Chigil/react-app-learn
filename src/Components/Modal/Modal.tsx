import React, { Dispatch, SetStateAction } from 'react';
import Auth from '../Auth/Auth';

const Modal = ({ openModal, setOpenModal, footer }: { openModal: boolean, setOpenModal: Dispatch<SetStateAction<boolean>>, footer?: boolean }) => {
  return (
    <div className={`modal ${openModal && 'd-block'}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setOpenModal(false)}
            />
          </div>
          <div className="modal-body">
            <Auth/>
          </div>
         {footer && <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Modal;