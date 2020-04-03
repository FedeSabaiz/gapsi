import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './shared/Header';

import Home from './views/Home';
import Products from './views/Products';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/products" component={Products} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
