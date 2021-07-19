import logo from './logo.svg';
import './App.css';
import {Switch, Route, withRouter} from 'react-router-dom'
import {AuthRoute, ProtectedRoute} from "../util/route_util"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div id="root">

          <p>Hello SomaShare</p>
        </div> */}

      {/* <Switch>
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
        <Route path="/" component={Header}></Route>
      </Switch> */}
      </header>
    </div>
  );
}

export default App;
