import axios from 'axios';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';

const API_KEY = process.env.API_KEY;




// export function fetchArticles(props) {
//   const request = axios.post(`https://gateway-a.watsonplatform.net/calls/data/GetNews?outputMode=json&start=now-1d&end=now&count=1&q.enriched.url.title=O[IBM%5EApple]&return=enriched.url.title,enriched.url.entities.entity.text,enriched.url.entities.entity.type&apikey=${API_KEY}`);

//   return (dispatch) => {
//     request.then(({data}) => {
//       dispatch({ type: FETCH_ARTICLES, payload: data })
//     });
//   };
// }

export function fetchArticles() {
  const request = axios.get(`https://gateway-a.watsonplatform.net/calls/data/GetNews?outputMode=json&start=now-1d&end=now&count=1&q.enriched.url.title=O[IBM%5EApple]&return=enriched.url.title,enriched.url.entities.entity.text,enriched.url.entities.entity.type&apikey=${API_KEY}`);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({ type: FETCH_ARTICLES, payload: data })
    });
  };
}