import React from 'react';
import CartItem from './cartitem';

class CartItemList extends React.Component {
    render() {
        return (
            <div>
                {this.props.items.map((item, index) => {
                    return <CartItem key="{'item-' + index}" locale="{this.props.locale}" item="{item}" />
                })}
            </div>
        );
    }
}

export default CartItemList;