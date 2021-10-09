import { writable } from 'svelte/store'

export const currentSection = writable(-1)
export const apiHost = writable('http://162.240.16.72:8080/api/v1')
// export const apiHost = writable('http://localhost:3001/api/v1')
export const imagesPath = writable('http://162.240.16.72/docs')
export const currentIdTipo = writable(localStorage.getItem('currentIdTipo') || -1)