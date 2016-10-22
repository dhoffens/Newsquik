import { FETCH_ARTICLES } from '../actions/index';

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case FETCH_ARTICLES:
      return { ...state, all: action.payload.data }
    default:
      return state;
  }
}