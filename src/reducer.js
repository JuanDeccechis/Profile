import { types } from "./actions";

const initialState = {
  user: "",
  loading: false,
  error: ''
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.LOGIN: {
      return {
        ...state,
        user: action.payload
      }
    }
    default: 
      return state;
  }
};

export default reducer;
