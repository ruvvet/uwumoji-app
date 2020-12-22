const API = 'http://localhost:5000';
let SELECTED_GUILD = localStorage.getItem('SELECTED_GUILD');


export default async function uwuRequest(url, options) {
  // get the code from local storage via the key UWU_TOKEN
  const userToken = localStorage.getItem('UWU_TOKEN');
  const headers = {
    ...options.headers,
    Authorization: `Bearer ${userToken}`,
    'X-UwU-User': 'some-id-goes-here',
  };

  const response = await fetch(`${API}${url}`, { ...options, headers });

  return response.json();
}

export function getSelectedGuild() {
  return SELECTED_GUILD;
}

export function setSelectedGuild(guildId) {

  localStorage.setItem('SELECTED_GUILD', guildId);
  SELECTED_GUILD = guildId;
}


export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

