import { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Nav } from "./components/Nav";
import { SignUp } from "./pages/SignUp";

const App = () => {
  const [userForm, setUserForm] = useState([]);
  const history = useHistory()

  const handleForm = (data) => {
    setUserForm([...userForm, data]);
    history.push("/dashboard")
  };

  return (
      <div className="wrapper">
        <Nav />
        <div className="container">
          <Switch>
            <Route path="/signUp">
              <SignUp handleForm={handleForm} />
            </Route>
            <Route path="/dashboard">
              <Dashboard data={userForm} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
  );
};

export default App;
