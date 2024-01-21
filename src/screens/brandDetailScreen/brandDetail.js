import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import Service from '../../service';
import IconArrowDown from '../../components/icons/iconArrowDown';
import HTMLView from 'react-native-htmlview';
import styles from './brandDetailStyle';

function BrandDetailScreen({navigation, route}) {
  const brandId = route?.params?.brandId;
  const [brandDetail, setBrandDetail] = useState(null);

  const getBrandDetail = () => {
    const service = new Service();
    service.promotions.getPromotionById({Id: brandId}).then(res => {
      if (res) {
        setBrandDetail(res);
      }
    });
  };

  useEffect(() => {
    getBrandDetail();
  }, [brandId]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Pressable
            onPress={() => navigation?.goBack()}
            activeOpacity={0}
            style={styles.iconBackView}>
            <IconArrowDown
              color="white"
              style={styles.iconArrow}
              width={16}
              height={16}
            />
          </Pressable>
        </View>
        <View>
          <Image
            style={styles.brandImage}
            source={{uri: brandDetail?.ImageUrl}}
          />
          <View style={styles.brandIconView}>
            <Image
              style={styles.brandIcon}
              source={{uri: brandDetail?.BrandIconUrl}}
            />
          </View>
        </View>

        <View style={styles.titleView}>
          <Text style={styles.titleText}>
            {brandDetail?.Title?.replace(/<[^>]*>/g, '')}
          </Text>
        </View>
        <View style={styles.descriptionView}>
          <HTMLView
            value={brandDetail?.Description || ''}
            stylesheet={{
              p: {fontSize: 14, color: '#1D1E1C', fontWeight: '400'},
            }}
          />
        </View>
      </ScrollView>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Hemen Katıl</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default BrandDetailScreen;
