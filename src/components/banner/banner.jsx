import styles from './banner.module.css';
import profileDescription from '../../util/description-json-method-adder.js';
import LinkedinIcon from '../../assets/svg/linkedln.svg';
import TwitterIcon from '../../assets/svg/x.svg';
import GithubIcon from '../../assets/svg/github.svg';
import MailIcon from '../../assets/svg/mail.svg';
import WhatsappIcon from '../../assets/svg/whatsapp.svg';
import Cv from '../../assets/svg/cv.svg';
import Me from '../../assets/png/big_avatar.png';
import {  useState } from "react";

import 'primeicons/primeicons.css';


const Banner = () => {
    const [description] = useState(profileDescription);
    const [iconMap] = useState({
        'linkedln.svg': LinkedinIcon,
        'x.svg': TwitterIcon,
        'github.svg': GithubIcon,
        'mail.svg': MailIcon,
        'whatsapp.svg': WhatsappIcon,
        'cv.svg': Cv
    });

    const Title = () => {
        const verbToBe = description.title.indexOf('y');
        const conjunction = description.title.substring(0, (verbToBe + 1));
        const name = description.title.substring((verbToBe + 2), description.title.length);
        return <h1 className={styles.title_style}>{conjunction} <span style={{color: 'red'}}>{name}</span></h1>;
    };

    return (
        <header className={styles.banner}>
            <section className={styles.section_one}>
                <div className={styles.div_one}>
                    <div className={styles.text_container}>
                        <h4>¡Bienvenido!</h4>
                        <Title/>
                        <h2>{description.subtitle}</h2>
                    </div>
                    <div>
                        <h3 className={styles.description_style}>{description.description}</h3>
                    </div>
                </div>
                <div className={styles.div_two}>
                    <div className={styles.div_two_title}>
                        <h3>También puedes encontrarme en</h3>
                    </div>
                    <div className={styles.social_media_container}>
                        {description.socialMedia.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className={styles.social_media_card}
                                    onClick={() => item.clickHandler(item)}
                                    role="button"
                                >
                                    <img
                                        key={item.name}
                                        alt={item.name}
                                        loading="lazy"
                                        src={iconMap[item.file]}
                                        style={{ height: '30px', width: '30px' }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <img src={Me} alt="Justine Arriaga"/>
        </header>
    );
};

export default Banner;