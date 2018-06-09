// @flow
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as moviesActions from '../actions/moviesActions';
import PosterList from '../components/PosterList';
import { Movie } from '../types';
import { styles } from '../styles';
import TopShelf from '../components/TopShelf';

type MoviesScreenStoreProps = {
  nowPlayingMovies: Array<Movie>,
  popularMovies: Array<Movie>,
  topRatedMovies: Array<Movie>,
  upcomingMovies: Array<Movie>
};

type MoviesScreenDispatchProps = {
  getNowPlayingMovies: () => void,
  getPopularMovies: () => void,
  getTopRatedMovies: () => void,
  getUpcomingMovies: () => void
};

type MoviesScreenProps = MoviesScreenStoreProps & MoviesScreenDispatchProps;

class MoviesScreen extends Component<MoviesScreenProps> {
  constructor(props: MoviesScreenProps) {
    super(props);
  }

  componentWillMount() {
    this.getMovies();
  }

  getMovies() {
    this.props.getNowPlayingMovies();
    this.props.getPopularMovies();
    this.props.getTopRatedMovies();
    this.props.getUpcomingMovies();
  }

  componentDidMount() {}

  render() {
    const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } = this.props;
    return (
      <ScrollView style={styles.screenContainer}>
        <TopShelf data={popularMovies} />
        <PosterList title={'Now Playing'} data={nowPlayingMovies} />
        <PosterList title={'Upcoming'} data={upcomingMovies} />
        <PosterList title={'Top Rated'} data={topRatedMovies} />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    nowPlayingMovies: state.movies.nowPlayingMovies,
    popularMovies: state.movies.popularMovies,
    topRatedMovies: state.movies.topRatedMovies,
    upcomingMovies: state.movies.upcomingMovies
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getNowPlayingMovies: moviesActions.getNowPlayingMovies,
      getPopularMovies: moviesActions.getPopularMovies,
      getTopRatedMovies: moviesActions.getTopRatedMovies,
      getUpcomingMovies: moviesActions.getUpcomingMovies
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesScreen);
