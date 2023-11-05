import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import ImageWrapper from '../../component/FastImage';
import Header from '../../component/Header';
import IconLabel from '../../component/IconLabel';

export default function Description(props) {
  const navigation = useNavigation();

  const {item} = props.route.params;
  const height = Dimensions.get('screen').width * 0.55;
  const width = Dimensions.get('screen').width * 0.55;

  console.log(item);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'space-evenly',

          backgroundColor: '#343743',
          borderRadius: 10,
          margin: 5,

          padding: 20,
          paddingVertical: 20,
        }}>
        <ImageWrapper
          url={item.image}
          style={{
            backgroundColor: '#02c39a',
            height: Dimensions.get('screen').width * 0.2,
            width: Dimensions.get('screen').width * 0.2,
            overflow: 'hidden',
            marginVertical: 12,
            borderRadius: (Dimensions.get('screen').width * 0.2) / 2,
          }}
        />
        <Text
          numberOfLines={1}
          style={{
            color: '#686F82',
            width: 100,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          {item.food}
        </Text>
        <Text
          style={{
            color: '#02c39a',
            zIndex: 9999,
            fontWeight: 'bold',
          }}>
          {`${Number(item.quantity).toFixed(2)}  ${item.measure}`}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderHorizontal = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: '#343743',
          borderRadius: 10,
          marginTop: 10,
          padding: 8,
          elevation: 2,
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
        }}>
        <ImageWrapper
          url={item.image}
          style={{
            backgroundColor: '#02c39a',
            height: Dimensions.get('screen').width * 0.15,
            width: Dimensions.get('screen').width * 0.15,
            overflow: 'hidden',
            marginVertical: 12,
            borderRadius: (Dimensions.get('screen').width * 0.15) / 2,
          }}
        />

        <Text
          numberOfLines={2}
          style={{
            color: '#686F82',
            flex: 1,
            fontSize: 18,
            marginLeft: 15,
            fontWeight: 'bold',
          }}>
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <ScrollView
      style={{
        backgroundColor: '#2C2F38',
        flex: 1,
      }}>
      <Header
        leftComponent={
          <Ionicons
            name={'chevron-back'}
            size={28}
            color={'#B0B6C8'}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={
          <Ionicons name={'ios-heart-outline'} size={28} color={'#B0B6C8'} />
        }
      />

      <View style={{alignItems: 'center'}}>
        <ImageWrapper
          url={item.recipe.image}
          style={{
            backgroundColor: '#02c39a',
            height: height,
            width: width,
            overflow: 'hidden',
            marginVertical: 12,
            borderRadius: width / 2,
          }}
        />
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 18,
            zIndex: 9999,
            letterSpacing: 1.5,
            marginVertical: 5,
          }}>
          {item.recipe.label}
        </Text>
        <Text style={{color: '#686F82', width: '70%', textAlign: 'center'}}>
          This is my kind off break fast my kind off break fast my kind off
          break fast
        </Text>

        <View
          style={{
            flexDirection: 'row',
            margin: 20,
            justifyContent: 'space-evenly',
          }}>
          <IconLabel
            IconComponent={
              <AntDesign name={'staro'} size={20} color={'#686F82'} />
            }
            LabelComponent={
              <Text style={{color: '#686F82', fontWeight: 'bold'}}>
                {' 4.8(168)'}
              </Text>
            }
          />
          <IconLabel
            IconComponent={
              <Entypo name={'stopwatch'} size={20} color={'#686F82'} />
            }
            LabelComponent={
              <Text style={{color: '#686F82', fontWeight: 'bold'}}>
                {' 20 min'}
              </Text>
            }
          />
          <IconLabel
            IconComponent={
              <Entypo name={'stopwatch'} size={20} color={'#686F82'} />
            }
            LabelComponent={
              <Text style={{color: '#686F82', fontWeight: 'bold'}}>
                {' 20 min'}
              </Text>
            }
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          padding: 12,
          paddingVertical: 20,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 18,
            zIndex: 9999,
            letterSpacing: 1.5,
            marginVertical: 5,
          }}>
          Ingridients
        </Text>

        <Text
          style={{
            color: '#686F82',
            fontWeight: 'bold',
          }}>{`${item.recipe.ingredients?.length} items`}</Text>
      </View>
      <FlatList
        data={item.recipe.ingredients}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <View style={{flex: 1, marginHorizontal: 20, marginTop: 20}}>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 18,
            zIndex: 9999,
            letterSpacing: 1.5,
            marginVertical: 5,
          }}>
          Instructions
        </Text>

        <FlatList
          data={item.recipe.ingredients}
          renderItem={renderHorizontal}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
}
