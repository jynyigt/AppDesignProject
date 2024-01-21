import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './tagsStyle';

function TagsComponent({navigation, tagData}) {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.renderItemView}>
        <View style={styles.rowView}>
          <View>
            <Image style={styles.imageIcon} source={{uri: item?.IconUrl}} />
          </View>
          <View style={styles.nameView}>
            <Text style={styles.nameText}>{item?.Name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatList}
      data={tagData}
      renderItem={renderItem}
      keyExtractor={item => item?.id}
    />
  );
}

export default TagsComponent;
