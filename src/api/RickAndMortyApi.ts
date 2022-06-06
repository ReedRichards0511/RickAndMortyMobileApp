import axios from "axios";

export const RickAndMortyApi = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
});