import { writable } from 'svelte/store'

export const currentSection = writable(-1)
export const apiHost = writable('https://brazaletesmexico.com/api/v1')
// export const apiHost = writable('http://localhost:3001/api/v1')
export const imagesPath = writable('https://brazaletesmexico.com/docs')
export const currentIdTipo = writable(localStorage.getItem('currentIdTipo') || -1)