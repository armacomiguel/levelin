import { View, Text, Alert } from 'react-native'
import React from 'react';

const Record = ({streak}:RecordProps) => {

    // console.log("data: ",streak);

  return (
    <View className='bg-blue-600 p-4 w-full'>
      <Text className='text-center text-white font-bold'>Record: {streak || 0}</Text>
    </View>
  )
}

export default Record;