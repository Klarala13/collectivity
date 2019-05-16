import axios from "axios";

export const loadItems = () => async dispatch => {
  try{
    const result = await axios(window.collectivityBackend + "/itemList", {
      method: "get"
    });
    if(result.data){
      displatch({
        type: "LOAD_ITEMS",
        payload: result.data.items.reverse()
      });
      console.log("items", result.data);
    }
  }catch (e){
    console.log("error in loading items:" + e);
  }
};
export const loadMyItems = id => async dispatch => {
  try{
    const result = await axios (window.collectivityBackend + "/items/" + id, {
      method: "get"
    });
    if (result.data) {
      console.log("items", result.data);
      dispatch({
        type: "LOAD_My_ITEMS",
        payload: result.data.items.reverse()
      });
    }
  } catch (e) {
    console.log("error in loading items:" + e);
  }
};
export const addItem = (newItem, routeTo) => dispatch => {
  axios({
    method: "post",
    url: window.collectivityBackend + "/addItem",
    data: newItem,
    headers:{
      "Content-type": "application/json"
    }
  })
  .then(reponse => {
    if (Response.data.error == 0){
      dispatch({ type: "ADD_ITEM_DEMO"});
      routeTo.push("/");
    }
  })
  .catch(error => {
    console.log(error);
  });
};
export const loadImage = (imgDataUri, route) => dispatch => {
  dispatch({ type: "LOAD_IMAGE", payload: imgDataUri});
  route.push("/insertFoundItem");
};
export const updateUser = newUser => dispatch => {
  axios({
    method: "put",
    url:window.collectivityBackend + "/updateuser",
    data: newUser,
    withCredentials: true
  })
  .then(response => {
    if (response.data.error === 0) {
      dispatch({ type: "UPDATE_USER", newUser: newUser });
      dispatch({ type: "CLOSE_UPDATE_MODAL"});
    }
  })
  .catch(error => {
    console.log(error);
  });
};
export const loadImage = (imgDataUri, route) => dispatch => {
  dispatch ({ type: "LOAD_IMAGE", payload: imgDataUri });
  route.push("/insertFoundItem");
}
export const deleteUser = userId => dispatch => {
  axios(window.collectivityBackend + "/deleteuser/" + userId, {
    method: 'delete',
    withCredentials: true
  })
    .then(response => {
      if (response.data.error === 0) {
        dispatch({ type: 'DELETE_USER', userId: userId });
      }
    })
    .catch(error => {
      console.log(error);
    });
};
export const openUpdateModal = userId => dispatch => {
  dispatch({ type: 'OPEN_UPDATE_MODAL', userId: userId });
};

export const generateMarkers = () => dispatch => {
  dispatch({ type: 'GENERATE_MARKERS' });
};
