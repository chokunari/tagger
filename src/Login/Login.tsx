import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

function Login() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then(userData => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
      }
    });

    getUser().then(userData => setUser(userData));
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch(() => console.log('Not signed in'));
  }

  return (
    <div>
      {/*<p>User: {user ? JSON.stringify(user.attributes) : 'None'}</p>*/}
      {user ? (
        <Button onClick={() => Auth.signOut()}>Sign Out</Button>
      ) : (
        <Button onClick={() => Auth.federatedSignIn()}>Federated Sign In</Button>
      )}
    </div>
  );
}

export default Login;