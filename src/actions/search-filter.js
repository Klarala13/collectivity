import axios from "axios";

export const searchForItems = searchingKeys => async dispatch => {
  try {
    const response = await axios({
      method: "get",
      url:
        window.collectivityBackend +
        "/search?p=" +
        searchingKeys.place +
        "&k=" +
        searchingKeys.keyword
    });
    if (response.data) {
      dispatch({
        type: "SEARCH_FOR_ITEMS",
        payload: response.data.documents
      });
    }
  } catch (e) {
    console.log("error loading items:" + e);
  }
};
export const filterItems = filterKeys => dispatch => {
  dispatch({ type: "FILTER_ITEMS", payload: filterKeys });
};