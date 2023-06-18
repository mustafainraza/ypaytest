import {ADD_NUMBER} from '../ActionTypes';

const initialState = {
  itemlist: [],
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER: {
      return {
        ...state,
        itemlist: [...state.itemlist, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
