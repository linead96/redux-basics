import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility.js";

const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(result => {
    return action.resultElId !== result.id;
  });
  return updateObject(state, {results: updatedArray});
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT: return updateObject(state, {results: [...state.results, { id: new Date(), value: action.result }]} )
    case actionTypes.DELETE_RESULT: return deleteResult(state,action);
    default: {
      return state;
    }
  }
};

export default reducer;
