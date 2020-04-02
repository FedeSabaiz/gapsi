import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './shared/Header';

import Home from './views/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
