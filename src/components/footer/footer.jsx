import styles from './footer.module.css';

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <section className={styles.footer_container}>
                <p>
                    © 2025 Justine Arriaga.
                    <br/> <br/>
                    Todos los derechos reservados.
                </p>
            </section>
        </footer>
    );
};

export default Footer;