import axios from 'axios';
const KEY="AIzaSyBpwQiOz89HPOOajRHO5cFSo_m-OhdWV8w";


export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        key:KEY,
        part:'snippet',
        type: 'video',
        maxResults:12
    }
})