import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredient = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map(( _ , i ) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    }).reduce((arr,el) => { // reduce JS array function allow us transform array into another thing the 
        // loop all elemnt and return them to the initial value 
        return arr.concat(el);
    },[]);
    if(transformedIngredient.length ===0){
        transformedIngredient = <p>please start adding Ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;