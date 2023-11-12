import {Dimensions, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  mainHeading: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  subHeading: {
    color: '#02c39a',
    fontSize: 22,
    letterSpacing: 1,
    marginTop: 10,
    fontWeight: 'bold',
  },
  subheading2: {
    color: '#02c39a',
    fontSize: 22,
    letterSpacing: 1,
    marginVertical: 10,
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
  container: {
    margin: Dimensions.get('window').width * 0.05,
  },
  imageStyle: {
    height: Dimensions.get('window').width * 0.5,
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginVertical: 10,
    backgroundColor: '#343743',
    overflow: 'hidden',

    alignSelf: 'center',
  },
  input: {
    height: 60,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#343743',
    padding: 10,
    backgroundColor: '#343743',
    color: '#686F82',
  },

  imageListStyle: {
    height: Dimensions.get('window').width * 0.12,
    width: Dimensions.get('window').width * 0.12,
    alignSelf: 'flex-start',
    backgroundColor: '#02c39a',
    overflow: 'hidden',

    borderRadius: (Dimensions.get('window').width * 0.12) / 2,
  },
  listitemStyle: {
    marginVertical: 5,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#343743',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
  },
  labelStyle: {
    color: '#686F82',
    fontSize: 18,
    letterSpacing: 1,
    flex: 1,
    marginHorizontal: 10,
    textAlign: 'left',
  },
  valueStyle: {
    color: '#686F82',
    fontSize: 18,
    letterSpacing: 1,

    flex: 1,
    marginHorizontal: 10,
    textAlign: 'right',
  },
  ingredientBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ingredient1: {
    height: 60,
    flex: 0.6,
    marginVertical: 10,

    borderWidth: 1,
    borderColor: '#343743',
    padding: 10,
    backgroundColor: '#343743',
    color: '#686F82',
    marginHorizontal: 5,
  },
  ingredient2: {
    height: 60,
    flex: 0.35,
    marginVertical: 10,

    borderWidth: 1,
    borderColor: '#343743',
    padding: 10,
    backgroundColor: '#343743',
    color: '#686F82',
  },
  iconBorder: {
    marginHorizontal: 5,
    padding: 2,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#686F82',
  },
  button: {
    padding: 10,
    marginButton: 10,
    justifyContent: 'center',
    color: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#02c39a',
    width: Dimensions.get('window').width * 0.9,
  },
  bottonLabel: {
    color: '#686F82',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 2,
  },
});

export {style};
