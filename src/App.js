import React from 'react';
import { Login } from './components/loginComponent/Login';
import { User } from './components/userComponent/User';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Switch>
            <Route exact path="/" component={LoginView} />
            <Route exact path="/user" component={UserView} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const LoginView = () => (
  <div>
    <Login />
  </div>
);

const UserView = () => (
  <div>
    <User />
  </div>
);

export default App;
