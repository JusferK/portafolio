import styles from './projects.module.css';
import profile from '../../../json/profile.json';
import Card from "../../card/card";
import { useState } from "react";
import type { MouseEvent } from 'react';
import { technologiesKeys } from "../../../util/util";
import type { ProjectType, Stack as Technology } from "../../../type/project.type";

type ProjectsProps = {
    onSelectProject: (project: ProjectType) => void;
};

type ProjectProps = {
    project: ProjectType;
};

type LinkProps = {
    links: Array<string>;
};

const Projects = ({ onSelectProject }: ProjectsProps) => {

    const [projects] = useState<ProjectType[]>(profile.projects);

    return (
        <section className={styles['projects_container']}>
            <h1 className={styles['main_title']}>Proyectos</h1>
            <div className={styles['projects_cards_container']}>
                {projects.map((project, index) => {
                    return (
                        <Card
                            key={index}
                            classes={styles['card_on_hover']}
                            clickHandler={() => onSelectProject(project)}
                        >
                            <Project project={project} />
                        </Card>
                    );
                })}
            </div>
        </section>
    );
};

const Stack = ({ technologies }: { technologies: Technology[] }) => {
    return (
        <>
            <div className={styles['stack_container']}>
                <div className={styles['stack_subcontainer']}>
                    {technologies.map(({ technology, file, id }) => {
                        return (
                            <div key={id} className={styles['languages_container_subcontainer']}>
                                <p>{technology}</p>
                                <img
                                    src={technologiesKeys[file]}
                                    alt={technology}
                                    style={{ width: '75px', height: '75px' }}
                                    loading="lazy"
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

const Project = ({ project }: ProjectProps) => {
    const { name, description, reason, stack, link  } = project;

    return (
        <div className={styles['project_container']}>
            <h2>{name}</h2>
            <p className={styles['description_paragraph']}>{description}</p>
            <p className={styles['project_reason']}>Motivo del proyecto: {reason}</p>
            <Stack technologies={stack}/>
            <Links links={link}/>
        </div>
    );
};

const Links = ({ links }: LinkProps) => {

    const clickHandler = (event: MouseEvent<HTMLLIElement>, link: string): void => {
        window.open(link, '_blank');
        event.stopPropagation();
    };

    return (
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <p>{links.length > 1 ? 'Links' : 'Link'} para el codigo:</p>
            {links.length > 0 ? (
                <ul
                    style={{
                        display: 'flex',
                        listStyleType: 'none',
                        gap: '2rem',
                    }}
                >
                    {links.map((link, index) => (
                        <li
                            key={link}
                            onClick={(event) => clickHandler(event, link)}
                            className={styles['links_items']}
                        >
                            Link {links.length > 1 ? (index + 1) : ''}
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ color: 'red' }}>No hay links disponibles.</p>
            )}
        </section>
    );

};

export default Projects;
