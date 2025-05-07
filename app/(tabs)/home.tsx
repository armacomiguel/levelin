import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Record from 'components/Record';
import { loadPlayerData } from 'lib/action';
import useStore from 'lib/store';

const Home = () => {

  const {loadAndSetDataPlayer, streak} = useStore();

  useEffect(() => {
    loadAndSetDataPlayer();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Record streak={streak} />
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
