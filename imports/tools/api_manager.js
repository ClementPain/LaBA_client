import axios from 'axios';

const url = process.env.API_URL

export const find = async () => {
  const {data} = await axios.get(`${url}/events/1`);

  return {
    props: {
      data
    }
  }
}