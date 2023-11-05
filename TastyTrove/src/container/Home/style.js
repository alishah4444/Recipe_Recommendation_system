import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  emptyContainer: {justifyContent: 'center', alignItems: 'center'},
  header: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
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
});

export default style;
