import {Image} from 'react-native';

const LocalImageWrapper = ({url, style, loadEnd}) => {
  return <Image source={url} style={style} resizeMode="contain"></Image>;
};

export default LocalImageWrapper;
