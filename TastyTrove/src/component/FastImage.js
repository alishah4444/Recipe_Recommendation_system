import FastImage from 'react-native-fast-image';

const ImageWrapper = props => {
  const {url, style, resizeMode} = props;

  return (
    <FastImage
      style={style}
      source={{
        uri: url,
        priority: FastImage.priority.normal,
      }}
      resizeMode={resizeMode || FastImage.resizeMode.contain}
    />
  );
};

export default ImageWrapper;
