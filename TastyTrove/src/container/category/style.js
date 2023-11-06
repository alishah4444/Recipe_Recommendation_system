import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    margin: 12,
  },
  headerLabel: {
    color: '#686F82',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  backIcon: {
    width: 30,
    height: 30,
    borderRadius: 5,
    position: 'absolute',
    zIndex: 9999,
    backgroundColor: '#343743',
  },
});

export default styles;
