import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6ba06735b6d8ff9168d2e501cc61153878eed0a9dc7ed25e8e7a812e33d8c6ae'
    }
});