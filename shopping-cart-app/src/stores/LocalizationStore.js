import restHelper from './../helpers/restHelper';
import dispatcher from './../dispatcher';

let localeInfo = {};
let changeListeners = [];

class LocalizationStore {
    constructor() {
        restHelper.get("locale")
        .then((locale) => {
            localInfo = locale;
            this.triggerListeners();
        });

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

    getLocale() {
        return localeInfo;
    }
}

export default LocalizationStore;