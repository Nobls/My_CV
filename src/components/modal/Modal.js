import React from 'react';
import styleModal from './modal.module.css'
import styleProjectCard from "../projectCard/ProjectCard.module.css";

const Modal = (props) => {
    const {active, setModalActive,descriptionModal,title,imageModal,url,} = props

    return (
        <div className={active ? `${styleModal.modal} ${styleModal.active}` : styleModal.modal} onClick={()=>setModalActive(false)} id={'modal'}>
            <div className={styleModal.modalContent} onClick={e => e.stopPropagation()}>
                <h3 className={styleModal.modalTitle}>{title}</h3>
                <img className={styleModal.modalImg} src={imageModal} alt={title}/>
                <p className={styleModal.modaldescription}>{descriptionModal}</p>
                <a className={styleModal.modalLink} href={url} target='blank'>Open site</a>
            </div>
        </div>
    );
};
export default Modal;
