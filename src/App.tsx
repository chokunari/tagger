import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from './AppBar/ButtonAppBar';
import UploadButton from './Upload/UploadButton'
import AddTagButton from './AddTag/AddTagButton'
//import SearchBar from './SearchBar/SearchBar'
import TagTable from './TagTable/TagTable'
import { createTheme, ThemeProvider } from '@material-ui/core';

Amplify.configure(awsExports);

const theme = createTheme({
  palette: {
    primary: {
      light: '#90a4ae',
      main: '#607d8b',
      dark: '#455a64',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
      contrastText: '#fff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Switch>
            <Route exact path='/' component={ButtonAppBar}/>
            {/*<Route path='/login' component={Login}/>*/}
          </Switch>
        </Grid>
        <Grid item xs={3}>
            <UploadButton/>
        </Grid>
        <Grid item xs={9}>
            <AddTagButton/>
        </Grid>
        {/*
        <Grid item xs={3}>
            <SearchBar/>
        </Grid>
         */}
        <Grid item xs={12}>
            <TagTable/>
        </Grid>
      </Grid>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;