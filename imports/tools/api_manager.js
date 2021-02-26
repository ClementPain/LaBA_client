import axios from 'axios';

const url = 'http://localhost:3000/api/v1/'

export const find = async () => {
  const {data} = await axios.get(`${url}/events/1`);

  return {
    props: {
      data
    }
  }
}