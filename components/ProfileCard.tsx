import React from 'react';
import { View, Text, Image } from 'react-native';
import ExpProgressBar from './ExpProgressBar';
import images from 'constans/images';

const ProfileCard = ({level, exp,  expToUp}:ProfileCardProps) => {
  return (
    <View className='flex justify-center items-center gap-2'>
      <Image 
          source={images.profileDefault} 
          resizeMode='cover'
          className='w-20 h-20 rounded-full mb-5'
          />
      <Text>Nivel {level || 0}</Text>
      <ExpProgressBar exp={exp} expToUp={expToUp}/>
    </View>
  );
};

export default ProfileCard;
