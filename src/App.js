import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { Login } from "./pages/login/Login";
import Logout from "./pages/logout/Logout";
import Products from "./pages/products/Products";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";

function App() {
  const [authenticated, setAuthenticated] = useState(true);

  const setAuth = (Boolean) => {
    setAuthenticated(Boolean);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login setAuth={setAuth} />
          </Route>
          <Route exact path="/dashboard">
            {authenticated ? <Dashboard /> : <Login />}
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
