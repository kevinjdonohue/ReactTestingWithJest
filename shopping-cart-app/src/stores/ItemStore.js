import restHelper from './../helpers/restHelper';
import dispatcher from './../dispatcher';


let items = [];
let changeListeners = [];

class ItemStore {
    constructor() {
        restHelper.get("items")
        .then((itemData) => {
            items = itemData;
            this.triggerListeners();
        });

        dispatcher.register((e) => {
            let [category, type] = e.type.split(":");
            if(category === "items") {
                if(type === "remove") {
                    items = items.filter(a => a.id !== e.item.id);
                    this.triggerListeners();
                }
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

    getItems() {
        return items;
    }
}

export default ItemStore;