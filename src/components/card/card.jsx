import styles from './card.module.css';

const Card = ({ children }) => {

    return (
        <div className={styles.card_container}>
            {children}
        </div>
    );
};

export default Card;