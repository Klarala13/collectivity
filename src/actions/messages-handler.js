import axios from "axios";

export const sendMessage = (
  newMessage,
  messageSource,
  routeTo
) => async dispatch => {
  try {
    const response = await axios({
      method: "post",
      url: window.collectivityBackend + "/message",
      data: newMessage
    });
    if (response.data.error == 0) {
      if (messageSource == "dialogue") {
        dispatch({
          type: "ADD_NEW_MESSAGE",
          payload: response.data.message
        });
      } else {
        dispatch({
          type: "SEND_MESSAGE"
        });
        routeTo.push("/");
      }
    }
  } catch (e) {
    console.log("error loading items:" + e);
  }
};
export const loadConversationItems = loggedInUserId => async dispatch => {
  try {
    const response = await axios({
      method: "get",
      url: window.collectivityBackend + "/conversationitems/" + loggedInUserId
    });
    if (response.data) {
      dispatch({
        type: "LOAD_CONVERSATION_ITEMS",
        payload: response.data.documents
      });
    }
  } catch (e) {
    console.log("error loading conversation items:" + e);
  }
};
export const loadDialogueMessages = conversationPort => async dispatch => {
  try {
    const response = await axios({
      method: "get",
      url: window.collectivityBackend + "/load/dialogue/messages/" + conversationPort
    });
    if (response.data) {
      dispatch({
        type: "LOAD_DIALOGUE_MESSAGES",
        payload: response.data.documents,
        users: response.data.users
      });
    }
  } catch (e) {
    console.log("error loading messages :" + e);
  }
};