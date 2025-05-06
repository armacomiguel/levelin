import AsyncStorage from '@react-native-async-storage/async-storage';
import { defaultTasks } from 'mock/data';

// Guardar datos
export const savePlayerData = async (playerData: any) => {
  try {
    const jsonValue = JSON.stringify(playerData);
    await AsyncStorage.setItem('playerData', jsonValue);
    console.log('Datos guardados');
  } catch (e) {
    console.error('Error al guardar', e);
  }
};

// Leer datos
export const loadPlayerData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('playerData');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error al leer', e);
    return null;
  }
};

// Cargar Tareas por default
export const loadTasks = async () => {
  const storedTasks = await AsyncStorage.getItem('tasks');
  if (storedTasks) {
    console.log("Si existe la data local: ", storedTasks);
    return JSON.parse(storedTasks);
  } else {
    console.log("Se crea nueva data local.");
    await AsyncStorage.setItem('tasks', JSON.stringify(defaultTasks));
    return defaultTasks;
  }
};

export const clearLocalData = async () => {
  try {
    await AsyncStorage.clear();
    console.log('✅ Datos locales borrados exitosamente.');
  } catch (error) {
    console.error('❌ Error al borrar los datos locales:', error);
  }
};
