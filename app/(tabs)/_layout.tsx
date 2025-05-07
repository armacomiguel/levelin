import { View } from 'react-native'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

interface TabIconParams {
    icon: React.ComponentProps<typeof Ionicons>['name']; // usa el tipo correcto
    color: string;
    name: string;
    focused: boolean;
  }

  const TabIcon = ({ icon, color, name, focused }: TabIconParams) => {
    return (
      <View>
        <Ionicons name={icon} size={24} color={color} />
      </View>
    );
  };

const TabsLayout = () => {
  return (
    <Tabs 
    screenOptions={{
        tabBarStyle: { 
            backgroundColor: '#1D2730',
            borderTopColor: "#E2E2E2",
            borderColor: "#1B242C",
            borderTopWidth: 3,      
            height: 80,             
            paddingBottom: 10,      
            paddingTop: 10,         
        },
        tabBarActiveTintColor: '#fff',               // color del ícono activo
        tabBarInactiveTintColor: '#aaa',             // color del ícono inactivo
      }}
    >
        <Tabs.Screen name='home'
            options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({color, focused}) => (
                    <TabIcon
                        icon="search"
                        color={color}
                        name="Home"
                        focused={focused}
                    />
                )
            }}
        />
        <Tabs.Screen name='profile'
            options={{
                title: "Perfil",
                headerShown: false,
                tabBarIcon: ({color, focused}) => (
                    <TabIcon
                        icon="person"
                        color={color}
                        name="Perfil"
                        focused={focused}
                    />
                )
            }} 
        />

        <Tabs.Screen name='tasks'
            options={{
                title: "Tareas",
                headerShown: false,
                tabBarIcon: ({color, focused}) => (
                    <TabIcon
                        icon="list"
                        color={color}
                        name="Tareas"
                        focused={focused}
                    />
                )
            }} 
        />
        <Tabs.Screen name="settings"
            options={{
                title: "Configuración",
                headerShown: false,
                tabBarIcon: ({color, focused}) => (
                    <TabIcon
                        icon="settings"
                        color={color}
                        name="Confguracion"
                        focused={focused}
                    />
                )
            }}
        />
    </Tabs>
  )
}

export default TabsLayout;