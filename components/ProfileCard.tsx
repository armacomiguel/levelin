import React from 'react';
import { View, Text, Image } from 'react-native';
import ExpProgressBar from './ExpProgressBar';
import images from 'constans/images';

const ProfileCard: React.FC = () => {
  return (
    <View className='flex justify-center items-center gap-2'>
        <Image 
            source={images.profileDefault} 
            resizeMode='cover'
            className='w-20 h-20 rounded-full mb-5'
            />
        <Text>Level 100</Text>
        <Text>Exp Bar</Text>
        <Text>Description Data:</Text>
        <ExpProgressBar />
    </View>
  );
};

export default ProfileCard;
