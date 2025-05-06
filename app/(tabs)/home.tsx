import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Record from 'components/Record';
import { loadPlayerData } from 'lib/action';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await loadPlayerData();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <View>
        {data ? <Record data={data} /> : <Text>Cargando datos...</Text>}
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
