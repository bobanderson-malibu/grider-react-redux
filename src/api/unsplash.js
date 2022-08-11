import axios from 'axios';

export default axios.create({
     baseURL: 'https://api.unsplash.com',
     headers: {
        Authorization: 'Client-ID _T9UYNqwL4Wr8y5goz61Pa0cQzNz83uNTQkQM6tvxMg'
    } 
 });