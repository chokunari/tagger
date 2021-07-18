import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import GoogleButton from 'react-google-button'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    button: {
      verticalAlign: 'middle',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
  }),
);

export default function GoogleSignin() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h1>Sigin in tagger!</h1>
        <GoogleButton
          className={classes.button} 
          onClick={() => { console.log('Google button clicked') }}
        />
    </div>
  );
}
