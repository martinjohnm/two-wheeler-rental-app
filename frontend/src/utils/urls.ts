import { BACKEND_URL } from "./config"




const backend_url = import.meta.env.BACKEND_URL


export const baseUserUrl = `${BACKEND_URL}/api/user`
export const baseAdminUrl = `${BACKEND_URL}/api/admin`
export const baseDoctorUrl = `${BACKEND_URL}/api/doctor`

// USER SIDE URLS =============================================

export const SIGNUP_USER    =  {url : baseUserUrl + "/auth/signup", method : "POST"}
export const LOGIN_USER     =  {url : baseUserUrl + "/auth/login", method : "POST"}
export const LOGOUT_USER    =  {url : baseUserUrl + "/auth/logout", method : "POST"}
export const CURRENT_USER   =  {url : baseUserUrl + "/auth/current-user", method : "GET"}
export const ALL_DOCTORS  =  {url : baseUserUrl + "/all-doctors", method : "GET"}
