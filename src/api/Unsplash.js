import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID z790ETbjyk5Vdigb7LaDsDn6tUoQ8zVy2jTZXokY7Xc'
    }
});