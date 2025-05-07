import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import ProfileCard from '../../components/ProfileCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStore from 'lib/store';

const Profile = () => {

  const {level, exp, expToUp} = useStore();

  return (
    <SafeAreaView className='bg-white h-full'>
      <StatusBar barStyle={'light-content'} animated={true} backgroundColor="transparent" translucent={true} />
      <View className='flex-1 items-center mt-11'>
        <ProfileCard level={level} exp={exp} expToUp={expToUp}/>
      </View>
    </ SafeAreaView>
  );
};

export default Profile;
