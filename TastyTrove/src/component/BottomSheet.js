import {
  View,
  Text,
  Modal,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';

export default function BottomSheet(props) {
  const {isVisible, toggleModal, RenderBottomItem} = props;

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
      <TouchableRipple style={style.modalView} onPress={toggleModal}>
        <View style={style.modelViewBeneath} onPress={handleModalPress}>
          {RenderBottomItem && <RenderBottomItem />}
        </View>
      </TouchableRipple>
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
});
