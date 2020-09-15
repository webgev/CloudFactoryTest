/**
 * Компонент для анимации текста при изменении текста
 */

import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {Text} from 'react-native-animatable';

interface Props {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

export const TextAnimated = (props: Props) => {
  const textRef = React.useRef<any>(null);
  const first = React.useRef(true);

  React.useEffect(() => {
    if (textRef.current && !first.current) {
      textRef.current.fadeIn && textRef.current.fadeIn();
    }
    first.current = false;
  }, [props.children]);

  return (
    <Text style={props.style} ref={textRef}>
      {props.children}
    </Text>
  );
};

export default TextAnimated;
