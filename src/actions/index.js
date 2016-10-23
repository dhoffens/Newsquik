import axios from 'axios';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const FETCH_VIDEOS = 'FETCH_VIDEOS';


/** Due to IBM's transaction limit, it was necessary that we cycle though API keys **/

const API_KEY = process.env.API_KEY;
const API_KEY2 = process.env.API_KEY2;
const API_KEY3 = process.env.API_KEY3;
const API_KEY4 = process.env.API_KEY4;
const API_KEY5 = process.env.API_KEY5;

const KEY_OF_CHOICE = [API_KEY, API_KEY2, API_KEY3, API_KEY5];

const RANDOM_KEY = KEY_OF_CHOICE[Math.floor((Math.random() * KEY_OF_CHOICE.length))];


//Youtube Search

const YOUTUBE_KEY = process.env.YOUTUBE_API_KEY;

// function videos(term) {
//   YTSearch({ key: YOUTUBE_KEY, term: term }, (videos) => {
//     console.log(videos);
//     let videoList = {
//       type: FETCH_ARTICLES,
//       payload: videos
//     }
//   })
// }




// export function fetchArticles(props) {
//   const request = axios.post(`https://gateway-a.watsonplatform.net/calls/data/GetNews?outputMode=json&start=now-1d&end=now&count=1&q.enriched.url.title=O[IBM%5EApple]&return=enriched.url.title,enriched.url.entities.entity.text,enriched.url.entities.entity.type&apikey=${API_KEY}`);

//   return (dispatch) => {
//     request.then(({data}) => {
//       dispatch({ type: FETCH_ARTICLES, payload: data })
//     });
//   };
// }

export function fetchArticles() {
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

export function fetchVideos(term){
                           // https://www.googleapis.com/youtube/v3/search?key=%7Byour_key_here%7D&channelId=%7Bchannel_id_here%7D&part=snippet,id&order=date&maxResults=20
  const request = axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${YOUTUBE_KEY}&q=${term}&type=video&channelId=UCajrNVKvG2xVlVcSr3GcsDA`);
  return {
    type: FETCH_VIDEOS,
    payload: request
  }
}
