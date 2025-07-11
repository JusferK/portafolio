import styles from './header.module.css';
import avatar from '../../assets/svg/avatar_small_f2.svg';

const Header = () => {
    return (
        <header className={styles.header_style}>
            <section>
                <div className={styles.avatar_wrapper}>
                    <img src={avatar} alt="me" />
                </div>
                <p>Justine</p>
            </section>
            <nav>
                <a>Quien soy</a>
                <a>Que hago</a>
                <a>Mis trabajos</a>
            </nav>
        </header>
    );
}

export default Header;