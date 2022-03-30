import axios from 'axios';
import { config } from 'app';

const swapiApi = axios.create({
  baseURL: config.envs.urls.api.swapi,
});

export { swapiApi };
