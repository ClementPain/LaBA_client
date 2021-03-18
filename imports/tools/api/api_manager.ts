import axios from 'axios';
import { APICallwithoutJSON, APICallwithJSON, AuthCall } from '@api_types'

let url: string;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  url = "http://localhost:3000/api/v1"
} else {
  url = "https://labonneauberge-server.herokuapp.com/api/v1"
}

// BASIC CALLS

const basicRes = (res:any) => console.log(res)

export const find: APICallwithoutJSON = async (
  endpoint, withCredentials,
  onSuccess = basicRes,
  onError = basicRes) => {

  await axios.get(
    `${url}/${endpoint}`, 
    { withCredentials: withCredentials }  
  )
    .then(res => onSuccess(res))
    .catch(error => onError(error))
}

export const post: APICallwithJSON = async (endpoint, withCredentials, json,
  onSuccess = basicRes,
  onError = basicRes) => {
  
  await axios.post(
    `${url}/${endpoint}`,
    json,
    { withCredentials: withCredentials}
  )
    .then(res => onSuccess(res))
    .catch(error => onError(error))
}

export const destroy: APICallwithoutJSON = async (endpoint, withCredentials,
  onSuccess = basicRes, onError = basicRes) => {
  
  await axios.delete(
    `${url}/${endpoint}`,
    { withCredentials: withCredentials }
  )
    .then(response => onSuccess(response))
    .catch(error => onError(error)) 
}

// AUTH CALLS

export const auth: AuthCall = async (url, user_infos, handleSuccessfulAuth, onError = basicRes) => {
  post(url, true, user_infos,
    (res) => handleSuccessfulAuth(res.data),
    onError
  )
};