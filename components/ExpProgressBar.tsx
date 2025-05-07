import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import useStore from '../lib/store';

const ExpProgressBar = ({exp, expToUp}: ExpBarProps) => {

  const progress = (exp % expToUp) / expToUp; // Si cada nivel es cada ${expToUp} XP

  return (
    <View style={styles.container}>
      <Progress.Bar 
        progress={progress} 
        width={250} 
        color="#4CAF50" 
        animated={true} 
        borderRadius={10}
      />
      <Text style={styles.text}>{exp % expToUp} / {expToUp} XP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  text: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ExpProgressBar;
