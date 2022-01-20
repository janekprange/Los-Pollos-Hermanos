import { writable } from "svelte/store"
import { browser } from "$app/env"

export const resDatum = writable(browser && new Date(Date.parse(localStorage.getItem("datum"))))
resDatum.subscribe((val) => {
  if (browser) return (sessionStorage.datum = val)
})

export const resDauer = writable(browser && Number(localStorage.getItem("dauer")))
resDauer.subscribe((val) => {
  if (browser) return (sessionStorage.dauer = val)
})

export const resTisch = writable(browser && JSON.parse(`[${localStorage.getItem("tisch")}]`).map((val) => val ? val.toString() : null))
resTisch.subscribe((val) => {
  if (browser) return (sessionStorage.tisch = val)
})

export const user = writable(browser && JSON.parse(localStorage.getItem("user")))
user.subscribe((val) => {
  if (browser) return (sessionStorage.user = val)
})