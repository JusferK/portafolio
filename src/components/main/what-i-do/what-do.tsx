import profile from '../../../json/profile.json';
import styles from "./what-i-do.module.css";
import FrontEnd from '/assets/svg/frontend.svg';
import BackEnd from '/assets/svg/backend.svg';
import Admin from '/assets/svg/admin.svg';
import Devops from '/assets/svg/devops.svg';
import { useState } from "react";
import Card from "../../card/card";
import { technologiesKeys } from "../../../util/util";
import type { SkillStack, SkillType } from '../../../type/skill.type';

const WhatIDo = () => {

    const [skills] = useState<SkillType[]>(profile.skills);

    return (
        <section className={styles['main_body_container']}>
            <div className={styles['main_title']}>
                <p>Habilidades</p>
            </div>
            <article className={styles['skills_container']}>
                {skills.map((skill) => {
                    return (
                        <Card key={skill.id}>
                            <Skill skill={skill} />
                        </Card>
                    )
                })}
            </article>
        </section>
    );
};

const Skill = ({ skill }: { skill: SkillType }) => {

    const { title, description, file, stack  } = skill;
    const [area] = useState<Record<string, string>>({
        'frontend.svg': FrontEnd,
        'backend.svg': BackEnd,
        'admin.svg': Admin,
        'devops.svg': Devops,
    });

    return (
        <>
            <div className={styles['skill_container']}>
                <div className={styles['skills_subcontainer']}>
                    <img
                        src={area[file]}
                        alt={title}
                        style={{ width: '100px', height: '100px' }}
                    />
                    <h2>{title}</h2>
                </div>
                <h4>{description}</h4>
                <Stack stack={stack} />
            </div>
        </>
    )

}

const Stack = ({ stack }: { stack: SkillStack[] }) => {
    return (
        <>
            <div className={styles['stack_container']}>
                {stack.map(({ type, technologies }, index) => {
                    return (
                        <div key={index} className={styles['stack_subcontainer']}>
                            <p className={styles['type_style']}>{type}</p>
                            <div className={styles['languages_container']}>
                                {technologies.map(({ technology, file, id }) => {
                                    return (
                                        <div key={id} className={styles['languages_container_subcontainer']}>
                                            <p
                                                className={styles['paragraph_description_from_subcontainer']}
                                            >{technology}</p>
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
