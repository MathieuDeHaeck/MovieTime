// @flow
import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import { Movie, TvShow } from '../types';
import Swiper from 'react-native-swiper';
import { styles } from '../styles';

type TopShelfProps = {
  data: Array<Movie | TvShow>
};
type TopShelfState = {};
const initialState: TopShelfState = {};

class TopShelf extends Component<TopShelfProps, TopShelfState> {
  constructor(props: TopShelfProps) {
    super(props);
    this.state = initialState;
  }

  setSwiper() {
    const { data } = this.props;
    if (data && data.length >= 0) {
      return (
        <Swiper autoplay autoplayTimeout={4} showsPagination={false} height={248} speed={300}>
          {data.map(item => (
            <Image
              style={{
                height: 248,
                backgroundColor: 'black',
                flex: 1
              }}
              key={item.id}
              source={{ uri: item.backdrop_path }}
            />
          ))}
        </Swiper>
      );
    } else {
      return null;
    }
  }

  render() {
    return this.setSwiper();
  }
}

export default TopShelf;
