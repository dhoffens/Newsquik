import axios from 'axios';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';

const API_KEY = process.env.API_KEY;


export function fetchArticles(props) {
  const request = axios.post('');

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({ type: FETCH_ARTICLES, payload: data })
    });
  };
}