import React from 'react';
import { Text, Button, View, Image, TouchableOpacity } from 'react-native';
import useStore from '../lib/store';
import icons from 'constans/icons';

const TaskCard: React.FC<{ task: Task }> = ({ task }) => {
  const { completeTask } = useStore();

  // Calcular tiempo restante
  let remainingTime = '';
  if (task.completed && task.lastCompleted) {
    const now = Date.now();
    const nextAvailable = new Date(task.lastCompleted).getTime() + (task.cooldownMinutes * 60000);

    const diffMs = nextAvailable - now;

    if (diffMs > 0) {
      const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
      const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      remainingTime = `${diffHrs}h ${diffMins}m restantes`;
    } else {
      remainingTime = '¡Disponible!';
    }
  }

  return (
    <View className='w-full mb-2'>
      <TouchableOpacity onPress={() => completeTask(task.id)} disabled={task.completed}>
        <View className="flex-row items-stretch justify-between">
          <View className={`${task.completed ? "bg-green-light" : "bg-orange-light"} w-[15%] items-center justify-center p-2 rounded-lg`}>
            <Image source={icons.profileIcon} resizeMode="contain" className="w-10 h-10 rounded-full" />
          </View>
          <View className={`${task.completed ? "bg-green-light" : "bg-orange-light"} w-[80%] justify-center p-2 rounded-lg`}>
            <Text className={`${task.completed ? "color-green-strong" : "color-orange-strong"} text-center`}>{task.name}</Text>
            {task.completed && (
              <Text className="text-xs text-center text-gray-600 mt-1">{remainingTime}</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TaskCard;
