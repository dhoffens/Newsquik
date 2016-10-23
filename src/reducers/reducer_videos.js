import { FETCH_VIDEOS } from '../actions/index';

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case FETCH_VIDEOS:
      console.log('video reducer', action.payload.data)
      return { ...state, all: action.payload.data }
    default:
      return state;
  }
}