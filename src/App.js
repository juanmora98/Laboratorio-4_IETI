import React from 'react';
import { Login } from './components/loginComponent/Login';
import { User } from './components/userComponent/User';
import { NewTask } from './components/NewTask';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Switch>
            <Route exact path="/" component={LoginView} />
            <Route path="/user" component={UserView} />
            <Route path="/NewTask" component={TaskView} />
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

const TaskView = () => (
  <div>
    <NewTask />
  </div>
);

const UserView = () => (
  <div>
    <User />
  </div>
);

export default App;
