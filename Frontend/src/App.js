import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-12">
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;