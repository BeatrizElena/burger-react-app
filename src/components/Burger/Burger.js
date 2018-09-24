import React from 'react';

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    // Use JS's Object.keys to extract the value of the ingredients in 
    // the object defined in BurgerBuilder.js, then use map() to do something 
    // with each ingredient (igKey) returned by the map function
    // the transformed ingredients const will then go in the return statement of
    // the const burger
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // for each ingredient returned by map(), use the Array() method to 
            // transform it into a new array of length given
            // e.g. In our ingredient 'cheese' has a value of 2, the arrays will have a length of 2
            // that value is found with the argument inside the Array method: props.ingredients[igKey]
            // then, inside the outer map() function, we execute map() again on the new array created
            // for the inner map() method, its 1st argument is an underscore _ because
            // we don't care what ingredient is returned (cheese, bacon, anything)
            // we do care how many of each ingredient, i represents that
            // the inner map() returns the ingredient from the outer array (igKey) PLUS i, which
            // represents the value of that key (igKey)
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        // the reduce method above flattens the separate arrays map() gaves us into just
        // one array by using the concat() method and adding each new array (el) to the 
        // prior array
        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding ingredients!</p>
        }

    return (
        <div className={classes.Burger}>
         <BurgerIngredient type="bread-top" />
         {transformedIngredients}
         <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger;