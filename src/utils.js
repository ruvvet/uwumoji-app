const API = 'http://localhost:5000';

export default async function uwuRequest(url, options) {

  // get the code from local storage via the key UWU_TOKEN
  const userToken = localStorage.getItem('UWU_TOKEN');
  const headers = {
    ...options.headers,
    Authorization: `Bearer ${userToken}`,
  };

  const response = await fetch(`${API}${url}`, { ...options, headers });

  return response.json();
}
