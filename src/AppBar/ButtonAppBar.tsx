import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Auth, Hub } from 'aws-amplify';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      color: '#fafafa'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

//Admin Queries APIのgetUserで取得したjsonを型付け
interface getUser{
  username:string,
  attributes:{
    sub: string,
    email_verified: boolean,
    email: string
  }
}

export default function ButtonAppBar() {
  const classes = useStyles();
  
  //ログイン機能　ここから
  const [user, setUser] = useState<getUser | null>(null);

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
//ログイン機能　ここまで


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            tagger
          </Typography>
          {/* ログインボタン　ここから */}
          <Button color="inherit"> {user ? JSON.stringify(user.username) : '未ログイン'}</Button>
          {user ? (
            <Button color="inherit" onClick={() => Auth.signOut()}>サインアウト</Button>
          ) : (
            <Button color="inherit" onClick={() => Auth.federatedSignIn()}>サインイン</Button>
          )}
          {/* ログインボタン　ここまで */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
