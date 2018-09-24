import React, { Component } from 'react'

import Aux from  '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'

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
        }
    // goal from here is to pass these burger array to our BurgerBuilder
    // by usig {this.state.ingredients}
    // then pass it to our Burger.js component (will need to convert the ingredient
    // object to an array when we get to the Burger.js file)
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;