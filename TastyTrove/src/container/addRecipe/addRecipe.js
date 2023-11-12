import {View, Text, KeyboardAvoidingView, Platform} from 'react-native';
import React, {useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {style} from './style';
import Header from '../../component/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageWrapper from '../../component/FastImage';
import TextInputComponent from '../../component/TextInputComponent';
import ListItem from '../../component/ListItem';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import BottomSheet from '../../component/BottomSheet';
import {Button} from 'react-native-paper';

export default function AddRecipe() {
  const navigation = useNavigation();
  const [recipeName, setRecipeName] = useState('');
  const [ingredient, setIngredient] = useState({
    name: '',
    qty: '',
  });

  const [ingredientData, setIngredientsData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleIngridientsData = () => {
    setIngredientsData(prevState => [...prevState, ingredient]);
  };
  const handleListItem = () => {
    setIsVisible(!isVisible);
  };
  const handleCreateRecipe = () => {};

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 20}
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
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
            <Ionicons
              name={'ellipsis-horizontal'}
              size={28}
              color={'#B0B6C8'}
            />
          }
        />
        <View style={style.container}>
          <Text style={style.mainHeading}>Create Recipe</Text>
          <ImageWrapper style={style.imageStyle}></ImageWrapper>

          <Ionicons
            name={'image'}
            size={28}
            style={{
              position: 'absolute',
              top: 20,
              right: 0,

              backgroundColor: '#02c39a',
              padding: 5,
              borderRadius: 5,
              elevation: 4,
            }}
            color={'#343743'}
          />

          <TextInputComponent
            placeholder={'Recipe Name'}
            inputStyle={style.input}
            onChangeHandler={value => {
              setRecipeName(value);
            }}
          />
          <ListItem
            handleList={handleListItem}
            imageStyle={style.imageListStyle}
            listStyle={style.listitemStyle}
            labelTag="Cook Time"
            labelStyle={style.labelStyle}
            labelValue="2.5"
            valueStyle={style.valueStyle}
            ListIcon={() => (
              <Ionicons
                name={'chevron-forward'}
                size={28}
                color={'#686F82'}
                onPress={() => navigation.goBack()}
              />
            )}
          />

          <ListItem
            handleList={handleListItem}
            imageStyle={style.imageListStyle}
            listStyle={style.listitemStyle}
            labelTag="Servings"
            labelValue="2"
            valueStyle={style.valueStyle}
            labelStyle={style.labelStyle}
            ListIcon={() => (
              <Ionicons
                name={'chevron-forward'}
                size={28}
                color={'#686F82'}
                onPress={() => navigation.goBack()}
              />
            )}
          />
          <Text style={style.subHeading}>Ingredients</Text>

          {ingredientData.length > 0 &&
            ingredientData.map((item, index) => (
              <Animatable.View
                animation="rubberBand"
                duration={1000}
                style={style.ingredientBox}>
                <TextInputComponent
                  editable={true}
                  placeholder={'Recipe Name'}
                  value={item.name}
                  inputStyle={style.ingredient1}
                />
                <TextInputComponent
                  editable={true}
                  value={item.qty}
                  placeholder={'Recipe Name'}
                  inputStyle={style.ingredient2}
                />
                <View style={style.iconBorder}>
                  <Ionicons name={'remove'} size={28} color={'#B0B6C8'} />
                </View>
              </Animatable.View>
            ))}

          <View style={style.ingredientBox}>
            <TextInputComponent
              placeholder={'Recipe Name'}
              inputStyle={style.ingredient1}
              onChangeHandler={value => {
                console.log(value);
                setIngredient(pre => ({...pre, name: value}));
              }}
            />
            <TextInputComponent
              placeholder={'Recipe Name'}
              inputStyle={style.ingredient2}
              onChangeHandler={value => {
                console.log(value);
                setIngredient(pre => ({...pre, qty: value}));
              }}
            />
            <View style={style.iconBorder}>
              <Ionicons
                name={'add'}
                size={28}
                color={'#B0B6C8'}
                onPress={handleIngridientsData}
              />
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Ionicons
              name={'add'}
              size={34}
              color={'#02c39a'}
              onPress={handleIngridientsData}
            />

            <Text style={style.subheading2}>Add Instructions</Text>
          </View>
        </View>

        <Button
          style={style.button}
          labelStyle={style.bottonLabel}
          onPress={handleCreateRecipe}>
          Save my recipe
        </Button>
        <BottomSheet isVisible={isVisible} toggleModal={handleListItem} />
        <View style={{height: 90}}></View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
