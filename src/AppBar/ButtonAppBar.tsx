import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
//import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
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

const theme = createTheme({
  palette: {
    primary: {
      light: '#cfd8dc',
      main: '#607d8b',
      dark: '#263238',
      contrastText: '#fff',
    },
  },
});

export default function ButtonAppBar() {
  const classes = useStyles();
  
  //ログイン機能　ここから
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
//ログイン機能　ここまで


  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/*
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
           */}
          <Typography variant="h6" className={classes.title}>
            tagger
          </Typography>
          {/* ログインボタン　ここから */}
          <p>User: {user ? JSON.stringify(user.attributes.name) : 'None'}</p>
          {user ? (
            <Button color="inherit" onClick={() => Auth.signOut()}>サインアウト</Button>
          ) : (
            <Button color="inherit" onClick={() => Auth.federatedSignIn()}>サインイン</Button>
          )}
          {/* ログインボタン　ここまで */}
        </Toolbar>
      </AppBar>
    </div>
    </ThemeProvider>
  );
}
