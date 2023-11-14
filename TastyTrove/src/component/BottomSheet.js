import {
  View,
  Text,
  Modal,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BottomSheet(props) {
  const {isVisible, toggleModal, RenderBottomItem, styleModel} = props;

  const handleModalPress = event => {
    event.stopPropagation();
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      onBackdropPress={toggleModal}
      transparent={true}
      onSwipeComplete={toggleModal}>
      <View style={style.modalView}>
        <View style={style.modelViewBeneath} onPress={handleModalPress}>
          <TouchableOpacity style={style.backIcon} onPress={toggleModal}>
            <Ionicons
              name={'close'}
              size={25}
              style={{
                alignSelf: 'center',

                justifyContent: 'flex-start',
              }}
              color={'#ffff'}
            />
          </TouchableOpacity>
          {RenderBottomItem && <RenderBottomItem />}
        </View>
      </View>
    </Modal>
  );
}

const style = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modelViewBeneath: {
    height: Dimensions.get('screen').height * 0.5,
    width: Dimensions.get('window').width,

    backgroundColor: '#343743',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  backIcon: {
    width: 40,
    height: 40,
    padding: 2,
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    margin: 10,
    backgroundColor: '#2C2F38',
  },
});
