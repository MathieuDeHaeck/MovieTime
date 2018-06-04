// @flow
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as moviesActions from '../actions/moviesActions';
import PosterList from '../components/PosterList';
import { Movie } from '../types';
import { styles } from '../styles';

type MoviesScreenStoreProps = {
  nowPlayingMovies: Array<Movie>,
  popularMovies: Array<Movie>
};

type MoviesScreenDispatchProps = {
  getNowPlayingMovies: () => void,
  getPopularMovies: () => void
};

type MoviesScreenProps = MoviesScreenStoreProps & MoviesScreenDispatchProps;

// type MoviesScreenState = {};
// const initialState: MoviesScreenState = {};

class MoviesScreen extends Component<MoviesScreenProps> {
  // MoviesScreenState
  constructor(props: MoviesScreenProps) {
    super(props);
    // this.state = initialState;
  }

  componentWillMount() {
    this.getMovies();
  }

  getMovies() {
    this.props.getNowPlayingMovies();
    this.props.getPopularMovies();
  }

  componentDidMount() {}

  render() {
    const { nowPlayingMovies, popularMovies } = this.props;
    return (
      <View style={styles.screenContainer}>
        <PosterList title={'Now Playing'} data={nowPlayingMovies} />
        <PosterList title={'Popular'} data={popularMovies} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    nowPlayingMovies: state.movies.nowPlayingMovies,
    popularMovies: state.movies.popularMovies
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getNowPlayingMovies: moviesActions.retrieveNowPlayingMovies,
      getPopularMovies: moviesActions.retrievePopularMovies
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesScreen);
