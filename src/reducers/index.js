import { combineReducers } from 'redux';
import ArticlesReducer from './reducer_articles';
import VideosReducer from './reducer_videos';


const rootReducer = combineReducers({
  articles: ArticlesReducer,
  videos: VideosReducer
});

export default rootReducer;
