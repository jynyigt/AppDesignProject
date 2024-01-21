import React from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';
import IconBrandFooter from '../icons/iconBrandFooter';
import styles from './sliderStyle';
import HTMLView from 'react-native-htmlview';

function SliderComponent({navigation, sliderData}) {
  const detailPress = (id, index) => {
    navigation?.navigate('BrandDetail', {brandId: id, currentIndex: index});
  };

  const getRemainingDays = ({remainingDateValue}) => {
    if (remainingDateValue) {
      const [day, month, year] = remainingDateValue.split('.');
      const remainingDate = new Date(`${year}-${month}-${day}`);
      const today = new Date();
      const oneDay = 24 * 60 * 60 * 1000;
      const timeDifference = remainingDate.getTime() - today.getTime();
      const remainingDays = Math.ceil(timeDifference / oneDay);
      return remainingDays > 0 ? remainingDays : 0;
    }
    return 0;
  };

  const Preview = ({item, index}) => {
    return (
      <View style={styles.container}>
        <View style={styles.brandContainer}>
          <IconBrandFooter brandColor={item?.PromotionCardColor} />
        </View>
        <View style={styles.borderView}>
          <TouchableOpacity onPress={() => detailPress(item?.Id, index)}>
            <Image style={styles.imageBrand} source={{uri: item?.ImageUrl}} />
            <View style={styles.brandIcon}>
              <Image
                style={styles.brandIconImage}
                source={{uri: item?.BrandIconUrl}}
              />
            </View>
            <View style={styles.remainingView}>
              <Text style={styles.remainingText}>
                son {getRemainingDays(item?.RemainingText)} gün
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.titleView}>
            <HTMLView
              value={item?.Title || ''}
              stylesheet={{
                p: {
                  fontSize: 14,
                  color: '#1D1E1C',
                  fontWeight: '700',
                  letterSpacing: -0.215,
                  textAlign: 'center',
                },
              }}
            />
          </View>
          <View style={styles.scenarioTypeView}>
            <Text style={styles.scenarioTypeText}>{item?.ScenarioType}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      {sliderData.length > 0 ? (
        <FlatListSlider
          data={sliderData}
          width={275}
          timer={2000}
          component={<Preview />}
          onPress={item => Alert(JSON.stringify(item))}
          indicatorActiveWidth={30}
          contentContainerStyle={styles.contentContainerStyle}
          indicatorActiveColor={'#F40000'}
        />
      ) : (
        <Text>No data available</Text>
      )}
    </View>
  );
}

export default SliderComponent;
