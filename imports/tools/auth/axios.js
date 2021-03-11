import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json"
  }
})