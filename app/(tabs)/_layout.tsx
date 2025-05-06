import { View, Text, Image, ImageSourcePropType } from 'react-native'
import { Tabs } from 'expo-router'
import icons from 'constans/icons';


interface TabIconParams {
    icon: ImageSourcePropType | undefined;
    color: string;
    name: string;
    focused: boolean;
}

const TabIcon = ({icon, color, name, focused}: TabIconParams) => {
    return (
        <View>
            <Image source={icon} resizeMode='contain' tintColor={color} className='w.6 h-6'/>
            <Text className={`${focused ? 'font-psemibold' : 'font-regular'} text-xs`}>{name}</Text>
        </View>
    );
}

const TabsLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='home'
            options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({color, focused}) => (
                    <TabIcon
                        // icon={icons.home} Pendiente
                        icon={icons.profileIcon}
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
                        icon={icons.profileIcon}
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
            }} 
        />
    </Tabs>
  )
}

export default TabsLayout;