// @ts-ignore
import axios from 'axios';

const AppAPI = axios.create({
    baseURL: process.env.API_URL,
});

export const fetchSongs = (search: string) => AppAPI.get(`/ra/songs.json?pattern=${search}`);
