import React from 'react';
import Dispatcher from './../dispatcher';

class LocalizationBox extends React.Component {

    handleCountryChanged() {

    }

    getInitialState() {
        return {
            country: this.props.country || "USA"
        }
    }

    render() {
        return (
            <form role="Language and Currency Preferences" className="locale-form">
                <h4>Select Country</h4>
                <select name="country" id="countrySelect" onChange="{this.handleCountryChanged}" value="{this.state.country}">
                    <option value="USA">United States</option>
                    <option value="GB">Great Britian</option>
                    <option value="CAN">Canada</option>
                </select>
            </form>
        );
    }
}

export default LocalizationBox;