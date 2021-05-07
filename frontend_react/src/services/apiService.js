const url = 'http://localhost:3001';
const token = localStorage.getItem('token')

const apiService = {
  get: async path => {
    const options = {
      method: 'GET',
      headers: {
        Accepts: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };
    return sendRequest(url + path, options);
  },
  req: async (method, path, body, auth = true) => {
    const options = {
      method,
      headers: {
        Accepts: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
    if (auth) {
      options.headers['Authorization'] = 'Bearer ' + token;
    }
    return sendRequest(url + path, options);
  }
}

const sendRequest = async (url, options) => {
  try {
    const response = await fetch(url, options);
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

export default apiService;
