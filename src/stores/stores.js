import {writable} from "svelte/store";

export const currentIdTipo = writable(-1);
export const currentSection = writable(-1);
export const apiHost = writable('https://brazaletes-mexico-api.herokuapp.com/api/v1');