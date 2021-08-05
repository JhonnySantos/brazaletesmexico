import { writable } from 'svelte/store'

export const currentSection = writable(-1)
export const apiHost = writable('http://142.4.3.24/api/v1')
export const imagesPath = writable('http://142.4.3.24/docs')
export const currentIdTipo = writable(localStorage.getItem('currentIdTipo') || -1)