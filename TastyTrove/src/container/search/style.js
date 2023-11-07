import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 60,

    marginVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#252830',
    padding: 10,
    backgroundColor: '#252830',
    color: '#686F82',
  },

  searchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  headerLabel: {
    color: '#686F82',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  listStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 5,
    backgroundColor: '#252830',
  },
  backIcon: {
    width: 30,
    height: 30,
    borderRadius: 5,
    position: 'absolute',
    zIndex: 9999,
    backgroundColor: '#343743',
  },

  textLabel: {
    color: '#686F82',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 15,
    flex: 1,
  },
  imageStyle: {
    backgroundColor: '#02c39a',
    height: 50,
    width: 50,
    overflow: 'hidden',
    marginHorizontal: 5,
    borderRadius: 50 / 2,
  },
});

export default styles;
