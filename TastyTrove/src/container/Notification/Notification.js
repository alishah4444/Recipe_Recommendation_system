import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../../component/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './style';
import {notificationType} from '../../constant/constant';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NotificationList from '../../component/NotificationList';
import RenderNotificationList from './renderNotificationList';

export default function Notification() {
  const handleListItem = () => {};

  return (
    <View style={styles.marginAround}>
      <Header
        label={'Notifications'}
        labelStyle={styles.headerLabelStyle}
        rightComponent={
          <Ionicons
            name={'ellipsis-horizontal'}
            size={28}
            color={'#B0B6C8'}
            style={{alignItems: 'center', marginTop: 10}}
          />
        }
      />
      <View style={styles.itemStyle}>
        {notificationType.map((type, index) => {
          return (
            <TouchableOpacity id={type.key} style={styles.item}>
              <Text style={styles.itemStyleText}> {type.type} </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <RenderNotificationList
        notyData={['', '']}
        handleListItem={handleListItem}
      />
    </View>
  );
}
