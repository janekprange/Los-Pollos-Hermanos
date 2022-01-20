import { writable } from "svelte/store"
import { browser } from "$app/env"

export const resDatum = writable(browser && new Date(Date.parse(sessionStorage.getItem("datum"))))
resDatum.subscribe((val) => {
  if (browser) return (sessionStorage.datum = val)
})

export const resDauer = writable(browser && Number(sessionStorage.getItem("dauer")))
resDauer.subscribe((val) => {
  if (browser) return (sessionStorage.dauer = val)
})

export const resTisch = writable(browser && JSON.parse(`[${sessionStorage.getItem("tisch")}]`).map((val) => val ? val.toString() : null))
resTisch.subscribe((val) => {
  if (browser) return (sessionStorage.tisch = val)
})

export const username = writable(browser && sessionStorage.getItem("username"))
username.subscribe((val) => {
  if (browser) return (sessionStorage.username = val)
})

export const usermail = writable(browser && sessionStorage.getItem("usermail"))
usermail.subscribe((val) => {
  if (browser) return (sessionStorage.usermail = val)
})

export const usertelephone = writable(browser && sessionStorage.getItem("usertelephone"))
usertelephone.subscribe((val) => {
  if (browser) return (sessionStorage.usertelephone = val)
})