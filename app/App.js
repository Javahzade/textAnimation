import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-native";
import { View, Text, Animated } from "react-native";
import { getAnimateText } from "./animated";
import {styles} from './styles';

const App = () => {
  const [isRefresh, setIsRefresh] = useState(false);
  const setNewAnimatedValue = () => new Animated.Value(setRandomValue());
  const setRandomDuration = () => Math.floor(Math.random() * 1001) * 2;
  const setRandomValue = () => -Math.floor(Math.random() * 1001);
  const text = 'Text messages are used for personal, family, business and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages became an accepted part of many cultures, as happened earlier with emailing.';
  const textSplit = text.split('');
  const textAnimatedArray = textSplit.map(item => ({text: item, duration: setRandomDuration(), value: setNewAnimatedValue()}));
  
  console.log(textAnimatedArray);
  
  useEffect(() => {
    getAnimateText(textAnimatedArray)
  }, [isRefresh]);
  
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        {textAnimatedArray.map((item, index) => 
          <Animated.Text key={index} style={{...styles.text, transform: [{translateY: item.value}]}}>
            {item.text}
          </Animated.Text>
        )}
      </View>
      <Button title='Refresh' onPress={() => setIsRefresh(!isRefresh)} />
    </View>
  );
};

export default App;
