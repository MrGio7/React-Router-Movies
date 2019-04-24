import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import {Route} from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    console.log(<Route exact path='/' Component={MovieList} />)
    return (
      <div>
        <SavedList list={this.state.savedList} />
          <Route exact path='/' Component={MovieList} />
          <Route exact path='/movies/:movieId' Component={Movie} />
      </div>
    );
  }
}
