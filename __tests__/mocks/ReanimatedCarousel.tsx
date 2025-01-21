import React, {ReactElement} from 'react';
import {View} from 'react-native';

const Carousel = ({
  data,
  renderItem,
}: {
  data: any[];
  renderItem: (data: any) => ReactElement;
}) => {
  return <View>{data.map((item, index) => renderItem({item, index}))}</View>;
};

export default Carousel;
