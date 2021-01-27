import React from 'react';

import styles from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    let newIngredients = Object.keys(props.ingredients)
    .map(igKey =>  {
        return [...Array(props.ingredients[igKey])]
        .map((_, i) => {
            return <BurgerIngredients key={igKey + i} type={igKey} />
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if (newIngredients.length === 0) {
        newIngredients = <p>Please start adding ingredients</p>
    }
    return (
        <div className={styles.burger}>
            <BurgerIngredients type="bread-top" />
            {newIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    )
}

export default burger