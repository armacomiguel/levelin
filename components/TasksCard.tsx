import React, { useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import useStore from '../lib/store';
import images from 'constans/images';
import { Ionicons } from '@expo/vector-icons';

const TaskCard: React.FC<{ task: TaskProps }> = ({ task }) => {
  const { completeTask, resetTask } = useStore();

  let remainingTime = '';
  const now = Date.now();
  const nextAvailable = new Date(task.lastCompleted).getTime() + (task.cooldownMinutes * 60000);
  const diffMs = nextAvailable - now;

  if (task.completed && task.lastCompleted) {
    if (diffMs > 0) {
      const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
      const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      remainingTime = `${diffHrs}h ${diffMins}m restantes`;
    } else {
      remainingTime = '¡Disponible!';
    }
  }

  // ⚠ Solo cuando esté disponible, disparamos el reset DESPUÉS del render
  useEffect(() => {
    if (task.completed && diffMs <= 0) {
      const timer = setTimeout(() => {
        resetTask(task.id);
      }, 2000); // esperar 2 segundos si quieres

      return () => clearTimeout(timer);
    }
  }, [task.completed, diffMs, resetTask, task.id]);

  return (
    <View className='w-full mb-2'>
      <TouchableOpacity onPress={() => completeTask(task.id)} disabled={task.completed}>
        <View className="flex-row items-stretch justify-between">
          <View className={`${task.completed ? "bg-green-light" : "bg-orange-light"} w-[15%] items-center justify-center p-2 rounded-lg`}>
            {/* <Image source={images.profileDefault} resizeMode="contain" className="w-10 h-10 rounded-full" /> */}
            <Ionicons name="person" size={24} color={`${task.completed ? "#2b9a66" : "#ef5f00"}`} />
          </View>
          <View className={`${task.completed ? "bg-green-light" : "bg-orange-light"} w-[83%] justify-center p-2 rounded-lg`}>
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
