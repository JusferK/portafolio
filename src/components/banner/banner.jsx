import styles from './banner.module.css';
import Description from '../../json/description.json';
import LinkedinIcon from '../../assets/svg/linkedln.svg';
import TwitterIcon from '../../assets/svg/x.svg';
import GithubIcon from '../../assets/svg/github.svg';
import FacebookIcon from '../../assets/svg/facebook.svg';
import Me from '../../assets/png/big_avatar.png';
import { useState } from "react";

const Banner = () => {
    const [description] = useState(Description);
    const [iconMap] = useState({
        'linkedln.svg': LinkedinIcon,
        'x.svg': TwitterIcon,
        'github.svg': GithubIcon,
        'facebook.svg': FacebookIcon
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
                                    onClick={() => window.open(item.link, '_blank', 'noopener, noreferrer')}
                                >
                                    <img
                                        key={item.name}
                                        alt={item.name}
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