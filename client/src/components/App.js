import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing'; // header component
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

// Dummy code
// const Dashboard = () => <h2>Dashboard</h2> 
// const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component {
  // lifecycle method, not componentWillMount
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
