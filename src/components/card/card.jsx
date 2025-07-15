import styles from './card.module.css';

const Card = ({ children, classes = '', clickHandler = () => {} }) => {

    return (
        <div className={`${styles.card_container} ${classes}`} onClick={clickHandler}>
            {children}
        </div>
    );
};

export default Card;