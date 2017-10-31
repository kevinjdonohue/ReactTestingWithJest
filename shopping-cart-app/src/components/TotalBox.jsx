import React from 'react';
import conversionHelper from './../helpers/conversionHelper';
import d3 from 'd3';

class TotalBox extends React.Component {

    calculateTotalItemsPrices() {
        return d3.sum(this.props.items, i=>i.priceUSD);
    }

    getTotalString() {
        return conversionHelper.toLocaleCurrencyString(this.calculateTotalItemsPrices(), this.props.items.locale.country);
    }

    render() {
        return (
            <section role="cart total" className="total">
                <h3>Your Total</h3>
                <h2>{this.getTotalString()}</h2>
                <button className="checkout">Check Out Now</button>
            </section>
        )
    }
}

export default TotalBox;