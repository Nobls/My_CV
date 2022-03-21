import React from 'react';
import styleModal from './modal.module.css'

const Modal = (props) => {
    const {active, setModalActive,descriptionModal,title,imageModal,url,lang,} = props

    return (
        <div className={active ? `${styleModal.modal} ${styleModal.active}` : styleModal.modal} onClick={()=>setModalActive(false)} id={'modal'}>
            <div className={styleModal.modalContent} onClick={e => e.stopPropagation()}>
                <h3 className={styleModal.modalTitle}>{title}</h3>
                <img className={styleModal.modalImg} src={imageModal} alt={title}/>
                <p className={styleModal.modalDescription}>{descriptionModal}</p>
                {lang ?
                    <>
                        <a className={styleModal.modalLink} href={url} target='blank'>Open project</a>
                    </>
                    :
                    <>
                        <a className={styleModal.modalLink} href={url} target='blank'>Открыть проект</a>
                    </>
                }
            </div>
        </div>
    );
};
export default Modal;
