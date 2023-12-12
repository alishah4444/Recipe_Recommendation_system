import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../../component/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './style';
import {notificationType} from '../../constant/constant';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NotificationList from '../../component/NotificationList';
import RenderNotificationList from './renderNotificationList';
import useSocket from '../../hook/useSocket';
import _ from 'lodash';

import {io} from 'socket.io-client';
const socket = io.connect('http://10.0.0.191:3000');
export default function Notification() {
  const [data, setData] = React.useState([]);
  const {socket: notificationSocket} = useSocket();

  socket.on('ReciepeTrigger', datao => {
    setData(datao); //local state
  });

  React.useEffect(() => {
    const handleRecipeTrigger = datao => {
      console.log('Recipe Triggered:', datao);
      setData(datao);
    };

    notificationSocket.on('ReciepeTrigger', handleRecipeTrigger); //trigger notification

    return () => {
      notificationSocket.off('ReciepeTrigger', handleRecipeTrigger); //clear connection
    };
  }, [notificationSocket]);

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
      <RenderNotificationList notyData={!_.isEmpty(data) ? data : null} />
      {/* render again when data is changed */}
    </View>
  );
}
