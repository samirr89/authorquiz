import React from 'react';
import './../style/App.css';
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import PageNotFound from '../components/common/PageNotFound'
import Author from './author/Author';
import { Route, Switch } from 'react-router-dom';
import AddAuthor from './author/Add-author'
import About from '../components/about/About';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row ">
          <div className="col-10 offset-1">
            <Header />
            <Switch>
              <Route exact path="/">
                <Author  />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/add_author">
                <AddAuthor  />
              </Route>
              <Route>
                <PageNotFound />
              </Route>
            </Switch>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default   App;
