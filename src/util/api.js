import Axios from 'axios';

export async function newToken() {
  const { data } = await Axios.post(
    `${process.env.REACT_APP_API_URL}`+"/auth/login", {
      email: process.env.REACT_APP_EMAIL,
      password: process.env.REACT_APP_PASSWORD,
    }
  )

  let expire = new Date();
  expire.setSeconds(expire.getSeconds() + data.expires_in);
  localStorage.setItem('token', data.access_token);
  localStorage.setItem('expired', expire.getTime());
  return data.access_token;
}

export function getToken() {
  const token = localStorage.getItem('token');
  const expired = localStorage.getItem('expired');

  if (token) {
    let curDate = new Date().getTime();
    if (curDate <= expired) {
      return token;
    }
  }
  destroy();
  return null;
}

export function destroy() {
  localStorage.removeItem('token');
  localStorage.removeItem('expired');
}

export async function getDataAPI(path) {
  let token = getToken();
  try {
    const { data } = await Axios.get(
      `${process.env.REACT_APP_API_URL}${path}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    return data;
  } catch {
    token = await newToken();
    const { data } = await Axios.get(
      `${process.env.REACT_APP_API_URL}${path}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return data
  }
}

export async function createDataAPI(path, payload) {
  let token = getToken();
  try {
    const { data } = await Axios.post(
      `${process.env.REACT_APP_API_URL}${path}`,
      payload,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    return data;
  } catch {
    token = await newToken();
    const { data } = await Axios.post(
      `${process.env.REACT_APP_API_URL}${path}`,
      payload,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return data
  }
}

export async function putDataAPI(path, payload) {
  let token = getToken();
  try {
    const { data } = await Axios.put(
      `${process.env.REACT_APP_API_URL}${path}`,
      payload,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    return data;
  } catch {
    token = await newToken();
    const { data } = await Axios.put(
      `${process.env.REACT_APP_API_URL}${path}`,
      payload,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return data
  }
}

export async function deleteDataAPI(path, payload) {
  let token = getToken();
  try {
    const { data } = await Axios.delete(
      `${process.env.REACT_APP_API_URL}${path}`,
      payload,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    return data;
  } catch {
    token = await newToken();
    const { data } = await Axios.delete(
      `${process.env.REACT_APP_API_URL}${path}`,
      payload,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return data
  }
}