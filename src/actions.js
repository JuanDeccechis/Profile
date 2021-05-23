
export const types = {
  LOGIN: "LOGIN",

  FETCH_USERS_SUCCESS: "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAIL: "FETCH_USERS_FAIL",
};

export const login = () => {
  return {
    type: types.LOGIN
  };
};

//estas funciones y sus types estan de mas para el ejemplo de saga
export const fetchUsersSuccess = users => {
  return {
    type: types.FETCH_USERS_SUCCESS,
    payload: users
  };
};

export const fetchUsersFail = () => {
  return {
    type: types.FETCH_USERS_FAIL
  };
};
