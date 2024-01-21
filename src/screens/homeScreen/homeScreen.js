import React, {useEffect, useState} from 'react';
import CustomHeader from '../../components/customHeader/customHeader';
import Service from '../../service';
import TagsComponent from '../../components/tagsComponent/tags';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPromotionsData} from '../../store/promotionsSlice';
import SliderComponent from '../../components/sliderComponent/slider';

function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  const {item} = useSelector(state => state.promotions);
  console.log({item});
  const [tags, setTags] = useState([]);
  useEffect(() => {
    getTags();
  }, []);

  useEffect(() => {
    dispatch(getPromotionsData());
  }, []);
  const getTags = async () => {
    const service = new Service();
    try {
      const res = await service.tags.getTags({});
      setTags(res);
    } catch (error) {
      console.error('Error tag data', error);
    }
  };

  return (
    <View>
      <CustomHeader />
      <View style={{marginTop: 10, marginBottom: 10}}>
        <TagsComponent tagData={tags} />
      </View>
      <SliderComponent navigation={navigation} sliderData={item} />
    </View>
  );
}

export default HomeScreen;
