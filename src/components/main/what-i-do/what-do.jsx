import Skills from '../../../json/skills.json';
import styles from "./what-i-do.module.css";
import FrontEnd from '../../../assets/svg/frontend.svg';
import BackEnd from '../../../assets/svg/backend.svg';
import Admin from '../../../assets/svg/admin.svg';
import Devops from '../../../assets/svg/devops.svg';
import Angular from '../../../assets/svg/angular.svg';
import React from '../../../assets/svg/react.svg';
import Spring from '../../../assets/svg/spring.svg';
import Expressjs from '../../../assets/svg/expressjs.svg';
import JavaSwing from '../../../assets/svg/javaswing.svg';
import Ionic from '../../../assets/svg/ionic.svg';
import Linux from '../../../assets/svg/linux.svg';
import Windows from '../../../assets/svg/windows.svg';
import Jenkins from '../../../assets/svg/jenkins.svg';
import Docker from '../../../assets/svg/docker.svg';
import { useState } from "react";
import Card from "../../card/card.jsx";

const technologiesKeys = {
    'jenkins.svg': Jenkins,
    'windows.svg': Windows,
    'linux.svg': Linux,
    'ionic.svg': Ionic,
    'javaswing.svg': JavaSwing,
    'expressjs.svg': Expressjs,
    'spring.svg': Spring,
    'react.svg': React,
    'angular.svg': Angular,
    'docker.svg': Docker,
};

const WhatIDo = () => {
    const [skills] = useState(Skills);
    return (
        <section className={styles.main_body_container}>
            <div className={styles.main_title}>
                <p>¿Qué hago?</p>
            </div>
            <article className={styles.skills_container}>
                {skills.map((skill) => {
                    return (
                        <Card key={skill.id}>
                            <Skill props={skill} />
                        </Card>
                    )
                })}
            </article>
        </section>
    );
};

const Skill = ({ props }) => {

    const { title, description, file, stack  } = props;
    const [area] = useState({
        'frontend.svg': FrontEnd,
        'backend.svg': BackEnd,
        'admin.svg': Admin,
        'devops.svg': Devops,
    });

    return (
        <>
            <div className={styles.skill_container}>
                <div className={styles.skills_subcontainer}>
                    <img
                        src={area[file]}
                        alt={title}
                        style={{ width: '100px', height: '100px' }}
                    />
                    <h2>{title}</h2>
                </div>
                <h4>{description}</h4>
                <Stack props={stack} />
            </div>
        </>
    )

}

const Stack = ({ props }) => {
    return (
        <>
            <div className={styles.stack_container}>
                {props.map(({ type, technologies }, index) => {
                    return (
                        <div key={index} className={styles.stack_subcontainer}>
                            <p className={styles.type_style}>{type}</p>
                            <div className={styles.languages_container}>
                                {technologies.map(({ technology, file, id }) => {
                                    return (
                                        <div key={id} className={styles.languages_container_subcontainer}>
                                            <p>{technology}</p>
                                            <img
                                                src={technologiesKeys[file]}
                                                alt={technology}
                                                style={{ width: '75px', height: '75px' }}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default WhatIDo;