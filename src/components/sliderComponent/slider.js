import React from 'react';
import {FlatList, Text, TouchableOpacity, View, Image} from 'react-native';
import IconBrandFooter from '../icons/iconBrandFooter';

function SliderComponent({navigation, sliderData}) {
  const detailPress = id => {
    navigation?.navigate('BrandDetail', {brandId: id});
  };

  const renderItem = ({item}) => {
    return (
      <View style={{marginHorizontal: 16}}>
        <View>
          <IconBrandFooter brandColor={item?.PromotionCardColor} />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#F4F6F5',
            padding: 5,
            borderRadius: 26,
            position: 'absolute',
            zIndex: 9999,
            backgroundColor: 'white',
            flex: 1,
          }}>
          <View>
            <TouchableOpacity onPress={() => detailPress(item?.Id)} style={{}}>
              <Image
                style={{
                  width: 300,
                  height: 300,
                  resizeMode: 'contain',
                  borderBottomLeftRadius: 100,
                  borderBottomRightRadius: 26,
                  borderTopLeftRadius: 26,
                  borderTopRightRadius: 26,
                  flex: 1,
                }}
                source={{uri: item?.ImageUrl}}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  zIndex: 1,
                  marginTop: 20,
                  marginLeft: 20,
                }}>
                <Image
                  style={{
                    width: 55,
                    height: 55,
                    resizeMode: 'contain',
                  }}
                  source={{uri: item?.BrandIconUrl}}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: '#1D1E1C',
                fontWeight: '700',
                letterSpacing: -0.215,
              }}
              numberOfLines={2}>
              {item?.Title?.replace(/<[^>]*>/g, '')}
            </Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Text>{item?.ScenarioType}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{flexDirection: 'row'}}
        data={sliderData}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
      />
    </View>
  );
}

export default SliderComponent;
