import Axios from 'axios';

export async function getDataAPI(path, { authorization }) {
  if (authorization) {
    const { data } = await Axios.get(
      `${process.env.REACT_APP_BACKEND_SERVER}${path}`,
      {
        headers: {
          Authorization: `${authorization}`,
        },
      }
    );

    return data;
  }
}