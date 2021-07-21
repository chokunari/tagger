import ButtonAppBar from "./AppBar/ButtonAppBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
//import Login from "./Login/Login"

Amplify.configure(awsExports);




function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ButtonAppBar}/>
        {/*<Route path='/login' component={Login}/>*/}
      </Switch>
    </BrowserRouter>
  );
}

export default App;