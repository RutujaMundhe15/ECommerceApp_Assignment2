import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Product from './components/Product';
import Cart from './components/Cart';
import Account from './components/Account';
import Comments from './components/Comments';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>CarMax</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Products</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/account">Account</Link>
              </li>
              <li>
                <Link to="/comments">Comments</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/account" component={Account} />
          <Route path="/comments" component={Comments} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Product} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
