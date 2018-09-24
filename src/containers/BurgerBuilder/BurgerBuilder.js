import React, { Component } from 'react'

import Aux from  '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    // old constructor syntax
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    // more modern syntax to replace the above code:
    // (be sure to use the same ingredients used in the switch cases in BurgerIngredient.js)
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    // goal from here is to pass these burger array to our BurgerBuilder
    // by usig {this.state.ingredients}
    // then pass it to our Burger.js component (will need to convert the ingredient
    // object to an array when we get to the Burger.js file)
    }

    // addIngredientHandler will receive a type of ingredient
    // it'll start with the current count for a given type of ingredient
    // calculate the new count by adding 1 to the current count
    // updateIngredients by using the spread operator to distribute the 
    // properties of the old ingredient's state (state.ingredients) into a 
    // new object
    // then take the updated ingredients object, access the type for which I'm 
    // updating the ingredient, and set the count to updatedCount
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        // if ingredient count === or < 0, return nothing
        if (oldCount <= 0) {
            return;
        }
        // else, add to ingredient count
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    }

    render() {
        // when ingredient count gets to 0, disable button
        const disabledInfo = {
            // copy state.ingredients object from above
            ...this.state.ingredients
        };
        // loop through ingredients in object and, for each key whose value is <= 0,
        // disable it
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        // pass the disabledInfo info as a property to the return below
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo} />
            </Aux>
        )
    }
}

export default BurgerBuilder;