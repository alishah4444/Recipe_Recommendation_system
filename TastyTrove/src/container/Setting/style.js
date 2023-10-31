import {StyleSheet, Dimensions} from 'react-native';

const Style = StyleSheet.create({
  input: {
    height: 60,
    margin: 12,
    marginVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#252830',
    padding: 10,
    backgroundColor: '#252830',
    color: '#686F82',
  },
  textinput: {
    height: 60,
    margin: 12,
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#252830',
    padding: 10,
    backgroundColor: '#252830',
    color: '#686F82',
  },
  header: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  label: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  labeltext: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    marginVertical: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  imageStyle: {
    backgroundColor: '#02c39a',
    height: 80,
    width: 80,
    overflow: 'hidden',
    marginVertical: 12,
    borderRadius: 80 / 2,
  },
  panel: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  tag: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    marginTop: 15,
  },
  headingtab: {
    color: '#C0c0c0',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },
  backIcon: {
    width: 30,
    height: 30,
    borderRadius: 5,
    position: 'absolute',
    zIndex: 9999,
    backgroundColor: '#343743',
  },
  button: {
    padding: 10,
    marginVertical: 12,
    justifyContent: 'center',
    color: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#02c39a',
    width: Dimensions.get('window').width * 0.8,
  },
  bottonLabel: {
    color: '#686F82',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 2,
  },
});
export default Style;
