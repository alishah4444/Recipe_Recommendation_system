import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SpecialInstruction(props) {
  const {handleIngridientsData, instructionData = ''} = props;
  return (
    <View>
      {instructionData == '' ? (
        <View style={style.rowPanel}>
          <Ionicons
            name={'add'}
            size={34}
            color={'#02c39a'}
            onPress={handleIngridientsData}
          />

          <Text style={style.subheading2}>Add Instructions</Text>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  subheading2: {
    color: '#02c39a',
    fontSize: 22,
    letterSpacing: 1,
    marginVertical: 10,
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
  rowPanel: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
