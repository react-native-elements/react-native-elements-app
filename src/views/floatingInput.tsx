import React from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TextInput,
  TextStyle,
  StyleProp,
  TextInputProps,
} from 'react-native';
import { RneFunctionComponent } from 'react-native-elements/dist/helpers';
import { withTheme } from 'react-native-elements/dist/config/index';
export type FloatingInputProps = TextInputProps & {
  label?: string;
  labelActiveSize?: number;
  labelInActiveSize?: number;
  labelActiveColor?: string;
  labelInActiveColor?: string;
  textInputStyles?: StyleProp<TextStyle>;
};
const FloatingTextInput: RneFunctionComponent<FloatingInputProps> = ({
  labelActiveSize = 14,
  labelInActiveSize = 15,
  labelActiveColor = 'grey',
  labelInActiveColor = '#86939E',
  textInputStyles = {},
  ...props
}) => {
  const [isFieldActive, setIsFieldActive] = React.useState(false);
  const { current: position } = React.useRef(
    new Animated.Value(isFieldActive ? 1 : 0)
  );
  const handleFocus = () => {
    if (!isFieldActive) {
      setIsFieldActive(true);
      Animated.timing(position, {
        toValue: 1,
        duration: 250,
        useNativeDriver: false,
      }).start();
    }
  };
  const handleBlur = () => {
    if (isFieldActive && props.value) {
      setIsFieldActive(false);
      Animated.timing(position, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }).start();
    }
  };
  const returnAnimatedlabelStyle = () => {
    return {
      top: position.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 0],
      }),
      fontSize: isFieldActive ? labelActiveSize : labelInActiveSize,
      color: isFieldActive ? labelActiveColor : labelInActiveColor,
    };
  };
  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.labelStyles, returnAnimatedlabelStyle()]}>
        {props.label}
      </Animated.Text>
      <TextInput
        style={[styles.textInput, textInputStyles]}
        underlineColorAndroid="transparent"
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: '#86939E',
    borderWidth: 0.5,
    height: 50,
    marginVertical: 6,
  },
  textInput: {
    fontSize: 15,
    marginTop: 20,
    marginLeft: 13,
    fontFamily: 'Avenir-Medium',
    color: '#86939E',
  },
  labelStyles: {
    position: 'absolute',
    fontFamily: 'Avenir-Medium',
    left: 13,
  },
});
export { FloatingTextInput };
export default withTheme(FloatingTextInput, 'FloatingInput');