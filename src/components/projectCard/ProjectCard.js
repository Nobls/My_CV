import React, {useState} from 'react';
import Modal from "../modal/Modal";

const ProjectCard = (props) => {
    const {image, title, description, url,descriptionModal,projects} = props
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
            <div onClick={allModalFunction}>
                <img src={image} alt={title}/>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={url}>View</a>
            </div>
            <Modal
                active={modalActive}
                setModalActive={setModalActive}
                title={title}
                descriptionModal={descriptionModal}
            />
        </div>
    );
};

export default ProjectCard;




