import { useEffect } from 'react';
import useStore from '../../lib/store';
import { Button, SafeAreaView, ScrollView } from 'react-native';
import TaskCard from 'components/TasksCard';
import { clearLocalData, savePlayerData } from 'lib/action';
import { mockData } from 'mock/data';

const Tasks = () => {
  const { tasks, loadAndSetTasks } = useStore();

  useEffect(() => {
    loadAndSetTasks();
  }, []);

  return (
    <SafeAreaView className='h-full p-5 bg-white'>

    <ScrollView className='mt-12'>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
      {/* <Button
        title="guardar"
        onPress={() => savePlayerData(mockData)}
      /> */}
      <Button
  title="Borrar datos locales"
  onPress={clearLocalData}
/>
    </ScrollView>
  </SafeAreaView>
  );
};

export default Tasks;
