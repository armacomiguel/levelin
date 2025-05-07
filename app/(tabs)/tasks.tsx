import useStore from '../../lib/store';
import { Button, SafeAreaView, ScrollView } from 'react-native';
import TaskCard from 'components/TasksCard';
import { clearLocalData, savePlayerData } from 'lib/action';
import { defaultPlayerData } from 'mock/data';

const Tasks = () => {

  const { tasks } = useStore();
  // console.log(tasks)

  return (
    <SafeAreaView className='h-full p-5 bg-blue-strong1'>

    <ScrollView className='mt-12'>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </ScrollView>
  </SafeAreaView>
  );
};

export default Tasks;
