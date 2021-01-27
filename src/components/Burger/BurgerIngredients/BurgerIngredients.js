import React from 'react';
import styles from "./BurgerIngredients.module.css"

const burgerIngredients = (props) => {
    let ingredients = null

    switch (props.type) {
        case ('bread-bottom'):
            ingredients = <div className={styles.breadBottom}></div>;
            break;
        case ('bread-top'):
            ingredients = (
                <div className={styles.breadTop}>
                    <div className={styles.seeds1}></div>
                    <div className={styles.seeds2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingredients = <div className={styles.meat}></div>;
            break;
        case ('cheese'):
            ingredients = <div className={styles.cheese}></div>;
            break;
        case ('lettuce'):
            ingredients = <div className={styles.lettuce}></div>;
            break;
        case ('bacon'):
            ingredients = <div className={styles.bacon}></div>;
            break;
        default:
            ingredients = null;
    }
        return ingredients;

};

export default burgerIngredients;
