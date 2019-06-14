import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.trello.com'
});

export default instance;