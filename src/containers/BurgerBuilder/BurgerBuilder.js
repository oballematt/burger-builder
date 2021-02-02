import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary"
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../axios-orders'

const INGREDIENT_PRICES = {
    lettuce: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            lettuce: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    updatePurchaseState (ingredients) {
        const value = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((value, el) =>{
                return value + el 
            } ,0)
            this.setState({purchasable: value > 0})
    }

    addIngredientHandler =(type) => {;
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients)
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceSubtraction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSubtraction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients)

    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    modalCloseHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
       // alert('Not Just Yet!')
       this.setState({loading: true})
       const order = {
           ingredients: this.state.ingredients,
           price: this.state.totalPrice,
           customer: {
               name: "Matt Oballe",
               address: {
                   street: 'Teststreet 1',
                   zipCode: '78751',
                   country: 'United States'
               },
               email: 'test@test.com'
           },
           deliveryMethod: 'fastest'
       }
        axios.post('/orders.json', order)
        .then(response => {
            this.setState({loading: false, purchasing: false})
        })
        .catch(error => this.setState({loading: false, purchasing: false}))
    }

    render () {
        const disabledButton = {
            ...this.state.ingredients
        }
        for (let key in disabledButton) {
            disabledButton[key] = disabledButton[key] <= 0
        }
        let orderSummary =  <OrderSummary ingredients={this.state.ingredients} 
        cancel={this.modalCloseHandler} 
        continue={this.purchaseContinueHandler}
        total={this.state.totalPrice}/> 
        if (this.state.loading) {
            orderSummary = <Spinner />
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.modalCloseHandler}>
                   {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledButton}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler} />
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios)