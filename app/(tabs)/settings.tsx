import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { clearLocalData } from 'lib/action';
import { SafeAreaView } from 'react-native-safe-area-context';

const settings = () => {
  return (
    <SafeAreaView className='h-full p-5 bg-white'>
      <View className='flex-1 justify-center items-center'>
        {/* <Button
          title="Borrar datos locales"
          onPress={clearLocalData}
        /> */}
        <TouchableOpacity className='bg-red-solid1 py-4 px-10 rounded-md border-b-[9px] border-red-solid2
        active:scale-95 w-full items-center' onPress={() => console.log('Presionado')} >
          <Text className='text-white text-lg font-bold'>Borrar datos locales</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default settings;