import React from 'react';
import styleModal from './modal.module.css'

const Modal = ({active, setModalActive,descriptionModal,title}) => {

    return (
        <div className={active ? `${styleModal.modal} ${styleModal.active}` : styleModal.modal} onClick={()=>setModalActive(false)}>
            <div className={styleModal.modalContent} onClick={e => e.stopPropagation()}>
                <p>{title}</p>
                <p>{descriptionModal}</p>
            </div>
        </div>
    );
};
export default Modal;
