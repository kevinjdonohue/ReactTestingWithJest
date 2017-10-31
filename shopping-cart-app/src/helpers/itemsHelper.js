import dispatcher from './../dispatcher';
import restHelper from './../helpers/restHelper';

class itemsHelper {
    removeItem(item) {
        dispatcher.dispatch({
            type: "items:remove",
            item
        });
        restHelper.del(`items/${item.id}`);
    }
}

export default itemsHelper;