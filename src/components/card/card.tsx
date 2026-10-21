import styles from './card.module.css';
import type { MouseEventHandler, ReactNode } from 'react';

type CardProps = {
    children: ReactNode;
    classes?: string | undefined;
    clickHandler?: MouseEventHandler<HTMLDivElement>;
};

const Card = ({ children, classes = '', clickHandler }: CardProps) => {

    return (
        <div className={`${styles['card_container']} ${classes}`} onClick={clickHandler}>
            {children}
        </div>
    );
};

export default Card;
