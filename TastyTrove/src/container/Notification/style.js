import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
  headerLabelStyle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  container: {},
  notificationContent: {margin: Dimensions.get('window').width * 0.02},

  itemStyle: {
    margin: 5,

    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'space-around',
  },
  item: {
    backgroundColor: '#343743',
    padding: 8,
    margin: 5,
    borderRadius: 5,
    width: Dimensions.get('window').width * 0.3,
  },

  itemStyleText: {
    color: '#02c39a',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
  },
  listitemStyle: {
    marginVertical: 5,

    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#343743',
    borderRadius: 10,
    padding: 12,

    flexDirection: 'row',
  },
  labelStyle: {
    color: '#686F82',
    fontSize: 18,
    letterSpacing: 1,

    marginHorizontal: 10,
    textAlign: 'left',
  },
  valueStyle: {
    color: '#686F82',
    fontSize: 16,
    letterSpacing: 1,
    marginHorizontal: 10,
    textAlign: 'left',
  },
  marginAround: {
    flex: 1,
    margin: Dimensions.get('window').width * 0.02,
  },
});

export {styles};
