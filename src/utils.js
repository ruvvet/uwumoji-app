const API = 'http://localhost:5000';

export default async function uwuRequest(url, options) {
  // Step 1: Check localstorage for a token, let's call our local storage key: UWU_TOKEN
  // Step 2: Add the Authorization header for the request (under options.headers) to include the token
  // Step 3: Optionally parse a JSON result coming in from the uwumoji-api before returning the result

  // get the code from local storage via the key UWU_TOKEN
  const userToken = localStorage.getItem('UWU_TOKEN');
  const headers = {
    ...options.headers,
    Authorization: `Bearer ${userToken}`,
    'Content-Type': 'application/json',
  };

  const response = await fetch(`${API}${url}`, { ...options, headers });

  return response.json();
}
