import axios from "axios";
import { runInContext } from "vm";

export const updateProfile = (newDataUser, id, route) => dispatch => {
  axios({
    method: "put",
    url: window.collectivityBackend + "/updateuser/" + id,
    data: newDataUser
  })
    .then(response => {
      if (response.data.error === 0) {
        dispatch({ type: "UPDATE_PROFILE", payload: response.data.newData });
        route.push("/myaccount");
      }
    })
    .catch(error => {
      console.log(error);
    });
};