import axios from 'axios';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';


/** Due to IBM's transaction limit, it was necessary that we cycle though API keys **/

const API_KEY = process.env.API_KEY;
const API_KEY2 = process.env.API_KEY2;
const API_KEY3 = process.env.API_KEY3;
const API_KEY4 = process.env.API_KEY4;
const API_KEY5 = process.env.API_KEY5;

const KEY_OF_CHOICE = [API_KEY, API_KEY2, API_KEY3, API_KEY5];

const RANDOM_KEY = KEY_OF_CHOICE[Math.floor((Math.random() * KEY_OF_CHOICE.length))];






// export function fetchArticles(props) {
//   const request = axios.post(`https://gateway-a.watsonplatform.net/calls/data/GetNews?outputMode=json&start=now-1d&end=now&count=1&q.enriched.url.title=O[IBM%5EApple]&return=enriched.url.title,enriched.url.entities.entity.text,enriched.url.entities.entity.type&apikey=${API_KEY}`);

//   return (dispatch) => {
//     request.then(({data}) => {
//       dispatch({ type: FETCH_ARTICLES, payload: data })
//     });
//   };
// }

export function fetchArticles() {
  console.log(KEY_OF_CHOICE.indexOf(RANDOM_KEY));

  const request = axios.get(`https://gateway-a.watsonplatform.net/calls/data/GetNews?outputMode=json&start=now-3m&end=now&count=5&q.enriched.url.enrichedTitle.keywords.keyword.text=trump&return=enriched.url.url,enriched.url.title,enriched.url.text&apikey=${RANDOM_KEY}`);

  // return (dispatch) => {
  //   request.then(({data}) => {
  //     console.log(data);
  //     dispatch({ type: FETCH_ARTICLES, payload: data })
  //   });
  // };

  return {
    type: FETCH_ARTICLES,
    payload: request
  }
}