import React from 'react'

import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (<li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: 
                {props.ingredients[igKey]}
                </li>)
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delcicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <h3>Total Price: ${props.total.toFixed(2)}</h3>
            <p>Continue to Checkout?</p>
            <Button btnType="danger" clicked={props.cancel}>CANCEL</Button>
            <Button btnType="success" clicked={props.continue}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary
