import {Animated, Easing} from 'react-native';

export const getAnimateText = (data) =>
  Animated.parallel(
    data.map((item) =>
      Animated.timing(item.value, {
        toValue: 0,
        easing: Easing.elastic(0),
        duration: item.duration,
        useNativeDriver: true,
      }),
    ),
  ).start();
