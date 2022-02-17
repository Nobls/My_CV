import React from 'react';
import style from '../../common/styles.module.css'
import stylesProjects from './Projects.module.css'
import ProjectCard from "../projectCard/ProjectCard";

const Projects = () => {

    const projects = [
        {id: 1,
            image: '',
            imageModal:'',
            title: 'Shoes',
            description: 'web-site',
            descriptionModal:'description web-site',
            url:'https://github.com/Nobls?tab=repositories'
        },
        {id: 2,
            image: '',
            imageModal:'',
            title: 'Coffee',
            description: 'web-site',
            descriptionModal:'description web-site',
            url:'https://github.com/Nobls?tab=repositories'
        },
        {id: 3,
            image: '',
            imageModal:'',
            title: 'Space Journey',
            description: 'web-site',
            descriptionModal:'description web-site',
            url:'https://github.com/Nobls?tab=repositories'
        },
        {id: 4,
            image: '',
            imageModal:'',
            title: 'Shoes',
            description: 'web-site',
            descriptionModal:'description web-site',
            url:'https://github.com/Nobls?tab=repositories'
        },
    ]

    return (
        <div className={stylesProjects.projectsBg} id={'project'}>
            <div className={`${style.container} ${stylesProjects.projects}`}>
                {
                    projects.map(m=>{
                        return(
                            <ProjectCard
                                key={m.id}
                                image={m.image}
                                title={m.title}
                                description={m.description}
                                url={m.url}
                                projects={projects}
                                descriptionModal={m.descriptionModal}
                            />
                        )
                    })
                }

            </div>
        </div>
    );
};

export default Projects;