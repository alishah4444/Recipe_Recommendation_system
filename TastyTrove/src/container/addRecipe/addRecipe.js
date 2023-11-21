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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';
import SpecialInstruction from '../../component/SpecialInstruction';
import {CREATE_RECIPE} from '../../utils/fetcher';
import client from '../../utils/Apollo';
import {useMutation} from '@apollo/client';
import {useSelector, useDispatch} from 'react-redux';
import storage from '@react-native-firebase/storage';
export default function AddRecipe() {
  const navigation = useNavigation();
  const [recipeName, setRecipeName] = useState('');
  const [recipeImageURL, setRecipeImageURL] = useState('');
  const [ingredient, setIngredient] = useState({});
  const user = useSelector(state => state.userReducer.user);

  const [ingredientData, setIngredientsData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [imageSetter, setImageSetter] = useState(null);
  const [instructionData, setInstructionData] = useState('');
  const [clickedItem, setClickedItem] = useState(null);
  const [CreateRecipe] = useMutation(CREATE_RECIPE, {client});
  const handleIngridientsData = () => {
    setIngredientsData(prevState => [...prevState, ingredient]);
  };
  const handleListItem = () => {
    setIsVisible(!isVisible);
  };
  const handleCreateRecipe = async () => {
    try {
      let recipeInput = {
        title: recipeName,
        imageUrl: recipeImageURL,
        description: 'This is a new recipe.',
        rating: '5',
        ingredients: ingredientData,
        specialInstruction: '',
        userId: user.id,
        cookTime: '11 minutes',
        servings: '3',
      };

      console.log(recipeInput);

      const {data} = await CreateRecipe({variables: {input: recipeInput}});
      console.log(data);
    } catch (error) {
      console.error('Error creating recipe:', error.message);
      throw error;
    }
  };

  const handleImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setImageSetter(imageUri);
        uploadImage();
      }
    });
  };
  const uploadImage = async () => {
    try {
      const reference = storage().ref('images/' + imageSetter);
      await reference.putFile(imageSetter);
      const imageUrl = await reference.getDownloadURL();
      setRecipeImageURL(imageUrl);
      console.log('Image uploaded successfully. Image URL:', imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleCancel = index => {
    let result = ingredientData.filter((item, ind) => ind !== index);
    console.log(result);
    console.log(index);
    setIngredientsData(result);
  };

  const renderItem = tag => {
    if (tag === 5) {
      setIsVisible(!isVisible);

      return (
        <View style={{padding: 12}}>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              fontWeight: 'bold',
              letterSpacing: 1,
            }}>
            Hello
          </Text>
        </View>
      );
    }
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
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

          <TouchableOpacity onPress={handleImagePicker}>
            <ImageWrapper
              style={style.imageStyle}
              resizeMode={FastImage.resizeMode.cover}
              url={imageSetter}></ImageWrapper>

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
          </TouchableOpacity>

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
                  <Ionicons
                    name={'remove'}
                    size={28}
                    color={'#B0B6C8'}
                    onPress={() => handleCancel(index)}
                  />
                </View>
              </Animatable.View>
            ))}

          <View style={style.ingredientBox}>
            <TextInputComponent
              placeholder={'Ingredient Name'}
              inputStyle={style.ingredient1}
              onChangeHandler={value => {
                console.log(value);
                setIngredient(pre => ({...pre, name: value}));
              }}
            />
            <TextInputComponent
              placeholder={'Measures'}
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
          <TouchableOpacity onPress={() => renderItem(5)}>
            <SpecialInstruction instructionData={instructionData} />
          </TouchableOpacity>
        </View>

        <Button
          style={[style.button, {marginBottom: 100}]}
          labelStyle={style.bottonLabel}
          onPress={handleCreateRecipe}>
          Save my recipe
        </Button>
        <BottomSheet
          isVisible={isVisible}
          toggleModal={handleListItem}
          RenderBottomItem={() => renderItem(5)}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
