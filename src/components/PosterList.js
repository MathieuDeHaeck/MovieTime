// @flow
import React, { Component } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { Movie, TvShow } from '../types';
import { styles } from '../styles';

type PosterListProps = {
  title: string,
  data: Array<Movie | TvShow>
};
type PosterListState = {};
const initialState: PosterListState = {};

class PosterList extends Component<PosterListProps, PosterListState> {
  constructor(props: PosterListProps) {
    super(props);
    this.state = initialState;
  }

  static renderItems(item: Movie | TvShow) {
    return (
      <View style={styles.posterContainer}>
        <Image style={{ width: 120, height: 180, borderRadius: 7 }} source={{ uri: item.poster_path }} />
        <Text style={styles.posterTitle} numberOfLines={2}>
          {item.title ? item.title : item.name}
        </Text>
      </View>
    );
  }

  static renderSeparator() {
    return <View style={{ width: 20 }} />;
  }

  render() {
    const { title, data } = this.props;
    return (
      <View style={{ paddingLeft: 14 }}>
        <Text style={styles.title}>{title}</Text>>
        <FlatList
          horizontal
          data={data}
          renderItem={({ item }) => PosterList.renderItems(item)}
          ItemSeparatorComponent={() => PosterList.renderSeparator()}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}

export default PosterList;
