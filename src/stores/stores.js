import {writable} from "svelte/store";

export const currentSection = writable(-1);
export const currentIdTipo = writable(localStorage.getItem('currentIdTipo') || -1);
export const apiHost = writable('https://brazaletes-mexico-api.herokuapp.com/api/v1');
// export const apiHost = writable('http://localhost:3000/api/v1');