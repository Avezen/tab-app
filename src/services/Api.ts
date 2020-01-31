// @ts-ignore
import axios from 'axios';

const AppAPI = axios.create({
    baseURL: 'http://localhost:3000/api',
});



export const fetchRecipes = (ingredients: any[]) => AppAPI.get(`/?i=${ingredients.join(',')}`);
