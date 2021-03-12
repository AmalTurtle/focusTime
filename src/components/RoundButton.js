import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

const RoundButton = ({ style = {}, textStyle = {}, size = 125, ...props }) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}> {props.title} </Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      borderColor: colors.white,
      borderWidth: 3,
      justifyContent: 'center',
    },

    text: {
      color: colors.white,
      fontSize: size / 4,
      alignItems: 'center',
      textAlign: 'center',

    },
  });
export { RoundButton };