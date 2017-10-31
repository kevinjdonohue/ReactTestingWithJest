import restHelper from './../helpers/restHelper';
import dispatcher from './../dispatcher';

let conversions = {};
let changeListeners = [];

class RatesStore {
    constructor() {
        restHelper.get("rates")
        .then((conversionRates) => {
            conversions = conversionRates;
            this.triggerListeners();
        }, (e) => {throw e});

        dispatcher.register((e) => {
            if(e.type === "locale:change") {
                localeInfo = {
                    country: e.country
                }
                this.triggerListeners();
            }
        });
    }

    triggerListeners() {
        changeListeners.forEach((listener) => {
            listener();
        });
    }

    onChange(listener) {
        changeListeners.push(listener);
    }

    getRates() {
        return conversions;
    }
}

export default RatesStore;