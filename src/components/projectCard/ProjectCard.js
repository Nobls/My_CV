import React, {useState} from 'react';
import Modal from "../modal/Modal";
import styleProjectCard from './ProjectCard.module.css'

const ProjectCard = (props) => {
    const {image, title, description, url,descriptionModal,projects, imageModal,} = props
    const [modalActive, setModalActive] = useState(false)
    const modalFilter = ()=> {
        projects.filter(f=>f.id === projects.id)
    }
    const allModalFunction = () => {
        setModalActive(true)
        modalFilter()
    }
    return (
        <div>
            <div className={styleProjectCard.projectCardItem} onClick={allModalFunction}>
                <h3 className={styleProjectCard.projectCardTitle}>{title}</h3>
                <p className={styleProjectCard.projectSubTitle}>{description}</p>
                <img className={styleProjectCard.projectCardImage} src={image} alt={title}/>
                <div className={styleProjectCard.projectCardLink} href={'modal'}>See More</div>
            </div>
            <Modal
                imageModal={imageModal}
                active={modalActive}
                setModalActive={setModalActive}
                title={title}
                descriptionModal={descriptionModal}
                url={url}
            />
        </div>
    );
};

export default ProjectCard;




