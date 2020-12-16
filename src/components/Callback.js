import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import uwuRequest from '../utils';

// after being authorized
// we retrieve the code from the req.query url

export default function Callback() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    // get the code from the url query
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');

    // if a code is returned
    if (code) {
      // make a call to the api endpoint to exchange the code for the access token
      const login = async () => {
        const response = await uwuRequest('/exchange', {
          method: 'POST',
          body: JSON.stringify({ code }),
        });

        // Save code to local storage
        localStorage.setItem('UWU_TOKEN', response.access_token);
      };

      login();

      // const hello = localStorage.getItem('UWU_TOKEN')
      // console.log('in local storage', hello)
      // get access back from express
      //

      history.push('/');
    } else {
      history.push('/login');
    }
  }, []);

  return <div>Loading</div>;
}
