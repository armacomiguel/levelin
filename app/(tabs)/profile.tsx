import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import ProfileCard from '../../components/ProfileCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile: React.FC = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
      <StatusBar barStyle={'light-content'} backgroundColor="#161622" />
      <View className='flex-1 items-center mt-11'>
        <ProfileCard />
      </View>
    </ SafeAreaView>
  );
};

export default Profile;
