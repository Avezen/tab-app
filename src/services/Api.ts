// @ts-ignore
import axios from 'axios';

const AppAPI = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const fetchSongs = (search: string) => AppAPI.get(`/ra/songs.json?pattern=${search}`);
