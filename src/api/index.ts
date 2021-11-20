import axios from 'axios';
import moment from 'moment';
import config from '../../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );

  return data;
};

export const getBio = async () => {
  const { data } = await axios.get(config.bioUrl);

  return data;
};

export const getWeather = async (city: string) => {
  const { data } = await axios.get(`/api/weather/${city}`);

  return data;
};

export const getQuote = async () => {
  const { data } = await axios.get('http://api.quotable.io/random');

  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};