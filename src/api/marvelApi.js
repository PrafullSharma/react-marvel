import axios from 'axios';
import md5 from 'md5';

class ComicApi {
  static getMarvel() {
    let privatekey = "3ba0c823f688fcf915e6ea7dd4dbcaa7537166f0";
    let publickey = "a493bf2102530283129ec7d07aaadfd3";
    let ts = new Date().getTime();
    let sessionHash = ts + privatekey + publickey;
    let hash = md5(sessionHash);
    //var characterId = '1009718'; // wolverine
    let config = {
      params: {
        apikey: publickey,
        "ts": ts,
        "hash": hash
      }
    };
    let headers = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    };
    // http://gateway.marvel.com/v1/public/comics?limit=100
    return axios.get('http://gateway.marvel.com/v1/public/comics', config, headers)
      .then(function(response) {
        console.log(response.data.data.results);
        return response.data.data.results;
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }
}

export default ComicApi;
