import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import NotificationList from '../../component/NotificationList';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './style';
import * as Animatable from 'react-native-animatable';

export default function RenderNotificationList(props) {
  const {notyData, handleListItem, navigation} = props;

  const renderItem = ({item, index}) => {
    const animationDelay = 500 * index;

    return (
      <Animatable.View
        animation="bounceIn"
        delay={animationDelay}
        duration={500}>
        <NotificationList
          handleList={handleListItem}
          listStyle={styles.listitemStyle}
          labelTag="Servings"
          labelValue="we are sorry about this notification list"
          valueStyle={styles.valueStyle}
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
            <TouchableOpacity
              style={{padding: 5, backgroundColor: '#02c39a', borderRadius: 8}}>
              <Ionicons
                name={'mail'}
                size={28}
                color={'#343743'}
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
          )}
        />
      </Animatable.View>
    );
  };

  return <FlatList renderItem={renderItem} data={notyData} />;
}
