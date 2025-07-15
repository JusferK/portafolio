import Skills from '../../../json/skills.json';
import styles from "./what-i-do.module.css";
import FrontEnd from '../../../assets/svg/frontend.svg';
import BackEnd from '../../../assets/svg/backend.svg';
import Admin from '../../../assets/svg/admin.svg';
import Devops from '../../../assets/svg/devops.svg';
import { useState } from "react";
import Card from "../../card/card.jsx";
import { technologiesKeys } from "../../../util/util.js";

const WhatIDo = () => {

    const [skills] = useState(Skills);

    return (
        <section className={styles.main_body_container}>
            <div className={styles.main_title}>
                <p>Habilidades</p>
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
};

export default WhatIDo;