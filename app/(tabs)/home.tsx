import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import Record from 'components/Record';
import { loadPlayerData } from 'lib/action';
import useStore from 'lib/store';

const Home = () => {

  const {loadAndSetDataPlayer} = useStore();

  useEffect(() => {
    loadAndSetDataPlayer();
  }, []);

  return (
    <SafeAreaView className='h-full bg-blue-strong1'>
      <StatusBar barStyle={'light-content'} animated={true} backgroundColor="#1D2730" translucent={true} />
      <View>
        <Record />
      </View>
    </SafeAreaView>
  );
};

export default Home;
