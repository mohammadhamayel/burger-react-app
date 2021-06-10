import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // this could be funcational componrnt, componentDidUpdate doesn't use here some functional is valid
    componentDidUpdate(){
        console.log('[OrderSummary.js] did update');
    }

    render (){
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return (
                <li key={igKey}>
                    <span styl={{textTransform:'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>)
                    ;
        });
        return (
            <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Countinue to Checkout?</p>
            <Button btnType='Danger' clicked={this.props.purchaseCanceled}>CANCEL</Button>
            <Button btnType='Success' clicked={this.props.purchaseCountinued}>CONTINUE</Button>

        </Aux>
        );
    }
} 

export default OrderSummary;