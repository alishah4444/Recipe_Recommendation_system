import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
// import ImageWrapper from './FastImage';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function FollowTag(props) {
  const {user} = props;

  return (
    <View style={{marginVertical: 10, height: props.headerHeight}}>
      <View style={styles.panel}>
        {/* <ImageWrapper style={styles.imageStyle} /> */}
        <View
          style={{
            justifyContent: 'flex-start',
            flex: 1,
            marginHorizontal: 20,
          }}>
          <Text
            style={{
              color: '#686F82',
              fontWeight: 'bold',
              fontSize: 16,
            }}
            numberOfLines={1}>
            {user ? user.email : 'Please Login or Sign Up'}
          </Text>
          <Text style={{color: '#686F82', fontSize: 12}} numberOfLines={1}>
            {user.username == undefined || user.email == undefined
              ? 'Update profile is required'
              : user.username || user.email}
          </Text>
        </View>
        <Ionicons
          name={'ellipsis-horizontal'}
          size={28}
          color={'#686F82'}
          style={{alignItems: 'center', marginTop: 10}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: Dimensions.get('window').width * 0.15,
    width: Dimensions.get('window').width * 0.15,
    alignSelf: 'flex-start',

    backgroundColor: '#686F82',
    overflow: 'hidden',
    alignSelf: 'center',
    borderRadius: (Dimensions.get('window').width * 0.15) / 2,
  },
  panel: {
    alignItems: 'center',
    elevation: 5,
    borderRadius: 5,
    justifyContent: 'space-between',
    paddingHorizontal: 15,

    margin: 2,
    padding: 10,

    flexDirection: 'row',
    backgroundColor: '#02c39a',
  },
});
