import axios from "axios";

export const openLoginSignUpModal = () => dispatch => {
  dispatch({ type: "OPEN_LOGIN_SIGNUP_MODAL" });
};

export const closeLoginSignUpModal = () => dispatch => {
  dispatch({ type: "CLOSE_LOGIN_SIGNUP_MODAL" });
};

export const logIn = loginUser => async dispatch => {
  try {
    const result = await axios(window.collectivityBackend + "/login", {
      method: "post",
      data: loginUser
    });
    if (result.data.error === 0) {
      dispatch({ type: "LOGIN", payload: result.data.loggedInUser });
    } else {
      dispatch({ type: "LOGIN_FAILED", error: result.data.message });
    }
  } catch (e) {
    dispatch({
      type: "LOGIN_FAILED",
      error: "Could not log in, please check connection and try again."
    });
  }
};
export const logOut = () => async dispatch => {
  try {
    dispatch({ type: "LOGOUT" });
    const res = await axios(window.collectivityBackend + "/logout", {
      method: "get"
    });

    if (res.data.error === 0) {
      dispatch({ type: "LOGOUT" });
    }
  } catch (e) {
    console.log(e);
  }
};

export const register = (register, routeTo) => async dispatch => {
  try {
    const result = await axios(window.collectivityBackend + "/login-signup", {
      method: "post",
      data: register,
      withCredentials: true
    });
    if (result.data.error === 0) {
      dispatch({ type: "SIGNUP" });
    } else {
      dispatch({ type: "SIGN_UP_FAILED", error: result.data.message });
    }
  } catch (e) {
    dispatch({ type: "SIGN_UP_FAILED", error: "Network Error" });
  }
};
export const displaySignUpSuccess = () => dispatch => {
  dispatch({ type: "SIGN_UP_SUCCESS" });
};

export const forgetPassword = (forgetPassUser, routeTo) => async dispatch => {
  try {
    const result = await axios(window.collectivityBackend + "/forgetpass", {
      method: "post",
      data: forgetPassUser,
      withCredentials: true
    });
    if (result.data.error === 0) {
      dispatch({ type: "RESET_FAILED_MESSAGES" });
      routeTo.push("/");
    } else {
      dispatch({ type: "FORGET_PASS_FAILED", error: result.data.message });
    }
  } catch (e) {
    dispatch({ type: "FORGET_PASS_FAILED", error: "Error in network!" });
  }
};

export const resetPassword = (forgetPassUser, routeTo) => async dispatch => {
  try {
    const result = await axios(window.collectivityBackend + "/resetpass", {
      method: "post",
      data: forgetPassUser,
      withCredentials: true
    });
    if (result.data.error === 0) {
      dispatch({ type: "RESET_FAILED_MESSAGES" });
      routeTo.push("/");
    } else {
      dispatch({ type: "FORGET_PASS_FAILED", error: result.data.message });
    }
  } catch (e) {
    console.log("error:" + e);
  }
};