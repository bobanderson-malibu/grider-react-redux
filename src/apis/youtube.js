import axios  from "axios";

const KEY = 'AIzaSyCzU9kveJU0ha-iQvlIUSFVIWSoh2deC6c';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});