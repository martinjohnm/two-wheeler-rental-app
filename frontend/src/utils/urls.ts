import { BACKEND_URL } from "./config"




// const backend_url = import.meta.env.BACKEND_URL


export const baseUserUrl = `${BACKEND_URL}/api/user`
export const baseAdminUrl = `${BACKEND_URL}/api/admin`
export const baseDoctorUrl = `${BACKEND_URL}/api/doctor`

// USER SIDE URLS =============================================

export const SIGNUP_USER    =  {url : baseUserUrl + "/auth/signup", method : "POST"}
export const LOGIN_USER     =  {url : baseUserUrl + "/auth/login", method : "POST"}
export const LOGOUT_USER    =  {url : baseUserUrl + "/auth/logout", method : "POST"}
export const CURRENT_USER   =  {url : baseUserUrl + "/auth/current-user", method : "GET"}
// === bikes===
export const GET_ALL_BIKES  =  {url : baseUserUrl + "/bikes/get-bikes", method : "GET"}
export const GET_ALL_BIKES_BY_FILTER  =  {url : baseUserUrl + "/bikes/get-bikes-by-filter", method : "POST"}
export const GET_ALL_BIKES_BY_DATE_RANGE  =  {url : baseUserUrl + "/bikes/get-bikes-by-date_range", method : "POST"}
export const GET_ALL_BIKES_BY_DATE  =  {url : baseUserUrl + "/bikes/get-bikes-by-date", method : "GET"}
export const GET_SINGLE_BIKE_BY_DATE  =  {url : baseUserUrl + "/bikes/get-single-bike-by-date", method : "GET"}

// === bOOKING ====
export const CREATE_BOOKING = {url : baseUserUrl + "/booking/create", method : "POST"}
export const CREATE_BOOKING_INTENT = {url : baseUserUrl + "/booking/create-booking-intent", method : "POST"}
export const GET_BOOKINGS_BY_USER = {url : baseUserUrl + "/booking/get-by-user", method : "GET"}
export const CANCEL_BOOKING = {url : baseUserUrl + "/booking/cancel", method : "POST"}

// === location ==
export const GET_ALL_LOCATION = {url : baseUserUrl + "/location/get-locations", method : "GET"}
export const GET_ALL_COMPANIES = {url : baseUserUrl + "/bikes/get-companies", method : "GET"}
