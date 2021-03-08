import React, { Component, Fragment} from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

import styles from './scanStyle'

function Scan(){
  return (
    <View>
      <Text>Введите код</Text>
      <TextInput />
    </View>
  );
}

export default Scan;
