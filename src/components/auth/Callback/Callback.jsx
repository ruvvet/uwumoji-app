import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import uwuRequest from '../../../utils';

// after being authorized
// we retrieve the code from the req.query url

export default function Callback() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    // get the code from the url query
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');
    const guild = searchParams.get('guild_id');

    localStorage.setItem('SELECTED_GUILD', guild);


    // if a code is returned
    if (code) {
      // make a call to the api endpoint to exchange the code for the access token
      const login = async () => {
        const response = await uwuRequest('/exchange', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code }),
        });

        // Save code to local storage
        localStorage.setItem('UWU_TOKEN', response.access_token);

      };

      login();

      history.push('/');
    } else {
      history.push('/login');
    }
  }, []);

  return <div>Loading</div>;
}
