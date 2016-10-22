import { FETCH_ARTICLES } from '../actions/index';

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case FETCH_ARTICLES:
      console.log(action.type);
      console.log(action.payload.data);
      return { ...state, all: action.payload.data }
    default:
      return state;
  }
}