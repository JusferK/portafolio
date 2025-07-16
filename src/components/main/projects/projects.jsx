import styles from './projects.module.css';
import Data from '../../../json/projects.json';
import Card from "../../card/card.jsx";
import { useState } from "react";
import React from "../../../assets/svg/react.svg";
import { technologiesKeys } from "../../../util/util.js";

const Projects = ({ props }) => {

    const { handler } = props;
    const [projects] = useState(Data);

    const clickHandler = (project) => {
        handler(project, 'OPEN');
    };

    return (
        <section className={styles.projects_container}>
            <h1 className={styles.main_title}>Proyectos</h1>
            <div className={styles.projects_cards_container}>
                {projects.map((project, index) => {
                    return (
                        <Card
                            key={index}
                            classes={styles.card_on_hover}
                            clickHandler={() => clickHandler(project)}
                        >
                            <Project props={project} />
                        </Card>
                    );
                })}
            </div>
        </section>
    );
};

export const Stack = ({ props }) => {
    return (
        <>
            <div className={styles.stack_container}>
                <div className={styles.stack_subcontainer}>
                    {props.map(({ technology, file, id }) => {
                        return (
                            <div key={id} className={styles.languages_container_subcontainer}>
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

const Project = ({ props }) => {
    const { name, description, reason, stack, link  } = props;
    return (
        <div className={styles.project_container}>
            <h2>{name}</h2>
            <p className={styles.description_paragraph}>{description}</p>
            <p className={styles.project_reason}>Motivo del proyecto: {reason}</p>
            <Stack props={stack}/>
            <Links props={link}/>
        </div>
    );
};

const Links = ({ props }) => {

    const clickHandler = (event, link) => {
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
            <p>{props.length > 1 ? 'Links' : 'Link'} para el codigo:</p>
            {props.length > 0 ? (
                <ul
                    style={{
                        display: 'flex',
                        listStyleType: 'none',
                        gap: '2rem',
                    }}
                >
                    {props.map((link, index) => (
                        <li
                            key={link}
                            onClick={(event) => clickHandler(event, link)}
                            className={styles.links_items}
                        >
                            Link {props.length > 1 ? (index + 1) : ''}
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