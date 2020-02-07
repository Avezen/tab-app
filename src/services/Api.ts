// @ts-ignore
import axios from 'axios';

const AppAPI = axios.create({
    baseURL: 'https://www.songsterr.com/a',
});



export const fetchSongs = (search: string) => AppAPI.get(`/ra/songs.json?pattern=${search}`);
export const fetchSongTabs = (id: number[], inst: string) => AppAPI.get(`/wa/song?id=${id}&inst=${inst}`);
