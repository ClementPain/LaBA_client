import axios from 'axios';

let url = '';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  url = "http://localhost:3000/api/v1"
} else {
  url = "https://labonneauberge-server.herokuapp.com/api/v1"
}


export const find = async () => {
  const {data} = await axios.get(`${url}/events/1`);

  return {
    props: {
      data
    }
  }
}