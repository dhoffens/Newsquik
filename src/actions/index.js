import axios from 'axios';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const FETCH_VIDEOS = 'FETCH_VIDEOS';


/** Due to IBM's transaction limit, it was necessary that we cycle though API keys **/

// const API_KEY = process.env.API_KEY;
// const API_KEY2 = process.env.API_KEY2;
// const API_KEY3 = process.env.API_KEY3;
// const API_KEY4 = process.env.API_KEY4;
// const API_KEY5 = process.env.API_KEY5;
// const API_KEY6 = process.env.API_KEY6;
// const API_KEY7 = process.env.API_KEY7;
const API_KEY8 = process.env.API_KEY8;


const KEY_OF_CHOICE = [API_KEY8];

const RANDOM_KEY = KEY_OF_CHOICE[Math.floor((Math.random() * KEY_OF_CHOICE.length))];


//Youtube Search

const YOUTUBE_KEY = process.env.YOUTUBE_API_KEY;


export function fetchArticles(term) {
  const request = axios.get(`https://gateway-a.watsonplatform.net/calls/data/GetNews?apikey=${RANDOM_KEY}&return=enriched.url.title,enriched.url.url,enriched.url.text&start=1476489600&end=1477177200&q.enriched.url.cleanedTitle=${term}&count=10&outputMode=json`);

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
