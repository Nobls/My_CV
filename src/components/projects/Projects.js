import React from 'react';
import style from '../../common/styles.module.css'
import stylesProjects from './Projects.module.css'
import ProjectCard from "../projectCard/ProjectCard"
import gleeIcon from '../../images/imageProject/glee.png'
import shoppingList from '../../images/imageProject/shoppingList.png'
import shoppingListModal from '../../images/imageProject/shoppingList.png'
import carRentalModal from '../../images/imageProject/carRental.png'
import carRental from '../../images/imageProject/carRental.png'
import gleeModalIcon from '../../images/imageProject/gleeModal.jpg'
import waveIcon from '../../images/imageProject/wavw.png'
import waveModalIcon from '../../images/imageProject/waveModal.jpg'


const Projects = (props) => {

    const {lang} = props

    const projects = [
        {
            id: 1,
            image: gleeIcon,
            imageModal: gleeModalIcon,
            title: 'Glee',
            description: 'Shop Web site',
            descriptionModal: 'this site is built with HTML 5, ScSS, JS',
            url: 'https://glee-rho.vercel.app/'
        },
        {
            id: 2,
            image: waveIcon,
            imageModal: waveModalIcon,
            title: 'Wave',
            description: 'Web site',
            descriptionModal: 'this site is built with HTML 5, ScSS, JS',
            url: 'https://nobls.github.io/Wave/'
        },
        {
            id: 3,
            image: shoppingList,
            imageModal: shoppingListModal,
            title: 'Shopping List',
            description: 'Web site',
            descriptionModal: 'this site is built with HTML 5, ScSS, JS',
            url: 'https://nobls.github.io/ShoppingList/'
        },
        {
            id: 4,
            image: carRental,
            imageModal: carRentalModal,
            title: 'Cars Rent',
            description: 'Web site',
            descriptionModal: 'this site is built with HTML 5, ScSS, JS',
            url: 'https://nobls.github.io/car-rental/'
        },
    ]

    return (
        <div className={stylesProjects.projectsBg} id={'project'}>
            <div className={style.container}>
                <div className={stylesProjects.projectsTitle}>
                    {lang ?
                        <>
                            <h3 className={stylesProjects.projectsTitle}>Project</h3>
                        </>
                        :
                        <>
                            <h3 className={stylesProjects.projectsTitle}>Проекты</h3>
                        </>
                    }
                </div>
                <div className={stylesProjects.projects}>
                    {
                        projects.map(m => {
                            return (
                                <ProjectCard
                                    key={m.id}
                                    image={m.image}
                                    imageModal={m.imageModal}
                                    title={m.title}
                                    description={m.description}
                                    url={m.url}
                                    projects={projects}
                                    descriptionModal={m.descriptionModal}
                                    lang={lang}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;