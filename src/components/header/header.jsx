import styles from './header.module.css';
import avatar from '../../assets/svg/avatar_small_f2.svg';

const Header = ({ props }) => {
    return (
        <header className={styles.header_style}>
            <section>
                <div className={styles.avatar_wrapper}>
                    <img src={avatar} alt="me" />
                </div>
                <a href="#SobreMi">Justine</a>
            </section>
            <nav className={styles.nav_links}>
                <a
                    className={`${props === 'SobreMi' ? styles.active_reference : ''}`}
                    href="#SobreMi"
                >Sobre mi</a>
                <a
                    className={`${props === 'Proyectos' ? styles.active_reference : ''}`}
                    href="#Proyectos"
                >Proyectos</a>
                <a
                    className={`${props === 'Habilidades' ? styles.active_reference : ''}`}
                    href="#Habilidades"
                >Habilidades</a>
            </nav>
        </header>
    );
}

export default Header;