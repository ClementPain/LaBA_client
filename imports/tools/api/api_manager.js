import axios from 'axios';

let url = '';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  url = "http://localhost:3000/api/v1"
} else {
  url = "https://labonneauberge-server.herokuapp.com/api/v1"
}

// BASIC CALLS

export const find = async (endpoint, withCredentials, { onSuccess, onError }) => {
  await axios.get(
    `${url}/${endpoint}`, 
    { withCredentials: withCredentials }  
  )
    .then(res => onSuccess(res))
    .catch(error => onError(error))
}

export const post = async (endpoint, json, withCredentials, { onError, onSuccess}) => {
  await axios.post(
    `${url}/${endpoint}`,
    json,
    { withCredentials: withCredentials}
  )
    .then(response => onSuccess(response))
    .catch(error => onError(error))
}

export const destroy = async (endpoint, withCredentials, { onSuccess, onError }) => {
  await axios.delete(
    `${url}/${endpoint}`,
    { withCredentials: withCredentials }
  )
    .then(response => onSuccess(response))
    .catch(error => onError(error)) 
}

// AUTH CALLS

export const auth = async (url, user_infos, handleSuccessfulAuth) => {
  post(
    url,
    user_infos,
    true,
    {
      onSuccess: (res) => handleSuccessfulAuth(res.data),
      onError: (e) => console.log(e)
    }
  )
};