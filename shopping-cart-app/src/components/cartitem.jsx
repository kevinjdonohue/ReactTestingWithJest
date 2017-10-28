import React, { Component } from 'react';
import conversionHelper from './../helpers/conversionHelper';
import itemsHelper from './../helpers/itemsHelper';

class CartItem extends React.Component {
    getDefaultProps() {
        return {
            item: {
                name: "default item",
                price: 1
            },
            locale: {
                country: undefined
            }
        };
    }

    getLocalizedCurrencySymbol() {
        return conversionHelper.getSymbolForCountry(this.props.locale.country);
    }

    getLocalizedPriceString() {
        let price = conversionHelper.convertFromUSD(this.props.locale.country, this.props.item.priceUSD);
        let currencyString = conversionHelper.toCurrencyString(price);

        return currencyString;
    }

    removeItem() {
        e.preventDefault();
        itemsHelper.removeItem(this.props.item);
    }

    render() {
        return (
            <section>
                <h4>{this.props.item.name}</h4>
                <p role="price">
                    Your price - <span className="currencySymbolDisplay">{this.getLocalizedCurrencySymbol()}</span>
                    <span className="cartItemPriceDisplay">{this.getLocalizedPriceString()}</span>
                </p>
                <p role="description">{this.props.item.description}</p>
                <form onSubmit="{this.removeItem}">
                    <button role="remove">Remove this item from the cart</button>
                </form>
            </section>
        );
    }
}

export default CartItem;