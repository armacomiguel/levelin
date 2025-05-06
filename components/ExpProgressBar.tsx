import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import useStore from '../lib/store';

const ExpProgressBar: React.FC = () => {
  const { xp, level } = useStore();

  const progress = (xp % 100) / 100; // Si cada nivel es cada 100 XP

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nivel: {level}</Text>
      <Progress.Bar 
        progress={progress} 
        width={250} 
        color="#4CAF50" 
        animated={true} 
        borderRadius={10}
      />
      <Text style={styles.text}>{xp % 100} / 100 XP</Text>
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
