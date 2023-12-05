import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import NotificationList from '../../component/NotificationList';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './style';
import * as Animatable from 'react-native-animatable';
import ImageWrapper from '../../component/ImageWrapper';
import FastImage from 'react-native-fast-image';
import {Chip} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

export default function RenderNotificationList(props) {
  const {notyData, handleListItem, navigation} = props;

  const renderItem = ({item, index}) => {
    console.log(item?.imageUrl, 'fsfsds');
    const animationDelay = 500 * index;

    return (
      <Animatable.View
        animation="bounceIn"
        delay={animationDelay}
        duration={500}>
        <NotificationList
          handleList={handleListItem}
          listStyle={styles.listitemStyle}
          labelTag={item?.title}
          labelValue={item?.description}
          valueStyle={styles.valueStyle}
          BadageData={() => (
            <ScrollView horizontal style={{flexDirection: 'row'}}>
              {item?.ingredients.map((itm, i) => (
                <Chip
                  style={{
                    marginHorizontal: 2,
                    backgroundColor: '#02c39a',
                  }}>
                  {itm.name + '-' + itm.qty}
                </Chip>
              ))}
            </ScrollView>
          )}
          labelStyle={styles.labelStyle}
          ListIcon={() => (
            <Ionicons
              name={'ellipse'}
              size={15}
              color={'#02c39a'}
              onPress={() => navigation.goBack()}
            />
          )}
          IconComponent={() => (
            <ImageWrapper
              url={item?.imageUrl}
              style={{
                backgroundColor: '#02c39a',
                height: 60,
                width: 60,
                overflow: 'hidden',
                marginVertical: 12,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          )}
        />
      </Animatable.View>
    );
  };

  return <FlatList renderItem={renderItem} data={notyData} />;
}
