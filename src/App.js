import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Profile from "./pages/Profile";
import { useState } from "react";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="app">
      <Router>
        <Route path="/" exact>
          <Link to="/profile">
            <button onClick={() => setIsAuth(true)}>Login</button>
          </Link>
          <button onClick={() => setIsAuth(false)}>LogOut</button>
          <Link to="/profile">Go to Profile</Link>
        </Route>
        <ProtectedRoutes path="/profile" component={Profile} isAuth={isAuth} />
      </Router>
    </div>
  );
}

export default App;
