import {View, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
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
import useSocket from '../../hook/useSocket';
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
  const [servings, setServings] = useState(null);
  const [cookTime, setCookTime] = useState(null);
  const [clickedItem, setClickedItem] = useState(null);
  const [recipeDesc, setRecipeDesc] = useState('');
  const general = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [CreateRecipe] = useMutation(CREATE_RECIPE, {client});
  const handleIngridientsData = () => {
    setIngredientsData(prevState => [...prevState, ingredient]);
  };

  const handleCreateRecipe = async () => {
    try {
      let recipeInput = {
        title: recipeName,
        imageUrl: recipeImageURL,
        description: recipeDesc,
        rating: '5',
        ingredients: ingredientData,
        specialInstruction: '',
        userId: user.id,
        cookTime: '11 minutes',
        servings: '3',
      };

      const {data} = await CreateRecipe({variables: {input: recipeInput}});
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
    }; //get image from firebase

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setImageSetter(imageUri);
        uploadImage(imageUri);
      }
    });
  };
  const uploadImage = async imageUri => {
    try {
      const reference = await storage().ref('images/' + imageUri); //get firebase connection
      const imageData = await reference.putFile(imageUri); // get url
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
    setIsVisible(true);
    setClickedItem(tag);
  };
  const renderItemChild = active => {
    switch (active) {
      case 1:
        return (
          <View style={{paddingHorizontal: 10}}>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                fontWeight: 'bold',
                letterSpacing: 1,
              }}>
              Cook Time
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {general.map((item, ind) => (
                <TouchableOpacity
                  key={ind}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 50 / 2,
                    borderWidth: servings == item ? 2 : 0,
                    borderColor: '#fff',
                    margin: 10,
                    backgroundColor: '#02c39a',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => setServings(item)}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontWeight: 'bold',
                      letterSpacing: 1,
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        );

      case 2:
        return (
          <View style={{paddingHorizontal: 10}}>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                fontWeight: 'bold',
                letterSpacing: 1,
              }}>
              Servings
            </Text>
          </View>
        );

      case 5:
        return (
          <View style={{paddingHorizontal: 10}}>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                fontWeight: 'bold',
                letterSpacing: 1,
              }}>
              Instructions
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

            {imageSetter == null ? (
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
            ) : null}
          </TouchableOpacity>

          <TextInputComponent
            placeholder={'Recipe Name'}
            inputStyle={style.input}
            onChangeHandler={value => {
              setRecipeName(value);
            }}
          />

          <TextInputComponent
            placeholder={'Recipe Descriptions'}
            inputStyle={style.input}
            onChangeHandler={value => {
              setRecipeDesc(value);
            }}
          />

          <TouchableOpacity onPress={() => renderItem(1)}>
            <ListItem
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
                  onPress={() => renderItem(1)}
                />
              )}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => renderItem(2)}>
            <ListItem
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
                  onPress={() => renderItem(2)}
                />
              )}
            />
          </TouchableOpacity>
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
          styleModel={{height: 250}}
          toggleModal={() => setIsVisible(!isVisible)}
          RenderBottomItem={() => renderItemChild(clickedItem)}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
