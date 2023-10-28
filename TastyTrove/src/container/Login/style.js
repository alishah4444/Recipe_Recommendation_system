import {Dimensions, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#252830',
    flex: 1,
  },
  input: {
    height: 65,
    margin: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#343743',
    padding: 10,
    backgroundColor: '#343743',
    color: '#686F82',
  },
  email: {
    marginHorizontal: 12,
    fontWeight: 'bold',
    color: '#686F82',
  },

  rememberMe: {
    marginHorizontal: 12,
    color: '#686F82',
    fontWeight: '500',
    textAlign: 'center',
    alignSelf: 'center',
  },
  heading: {
    fontSize: Dimensions.get('window').width / 15,
    fontWeight: 'bold',
    color: '#686F82',
    textAlign: 'center',
  },
  header: {
    marginVertical: Dimensions.get('window').width / 7,
    alignItems: 'center',
  },
  tagLine: {
    textAlign: 'center',
    marginVertical: 5,
    color: '#686F82',
    width: Dimensions.get('window').width * 0.8,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    justifyContent: 'center',
    color: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#343743',
    width: Dimensions.get('window').width * 0.8,
  },
  bottonLabel: {
    color: '#686F82',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 2,
  },
  backIcon: {
    margin: 12,
    width: 30,
    height: 30,
    borderRadius: 5,
    position: 'absolute',
    backgroundColor: '#343743',
  },
});

export default style;
