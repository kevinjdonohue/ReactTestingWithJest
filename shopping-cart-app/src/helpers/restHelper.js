import Axios from "axios";

class restHelper {
  get(url) {
    return Axios.get(url)
      .then(response => {
        return response;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }

  del(url) {
    return Axios.delete(url)
      .then(response => {
        return response;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }
}
