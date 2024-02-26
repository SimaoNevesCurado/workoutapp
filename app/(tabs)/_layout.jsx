import React from 'react';

import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import programCreate from '../programCreate';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';


function TabBarIcon(props) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: "#a60f1e"
      // Disable the static render of the header on web
      // to prevent a hydration error in React Navigation v6.

    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/Informacoes" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="programs"
        options={{
          headerShown: false,
          title: 'Programs',
          tabBarIcon: ({ color }) =>
            <AntDesign name="check" style={{ marginBottom: -3 }} size={25} color={color} />
        }}


      />


      <Tabs.Screen
        name="progress"
      
        options={{
          headerShown: false,
          title: 'Progress',
          tabBarIcon: ({ color }) => <Entypo name="bar-graph" style={{ marginBottom: -3 }} size={25} color={color} />
        }}

      />

      <Tabs.Screen
        name="profile"
        
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons name="person-circle-outline"  style={{ marginBottom: -3 }}size={28} color={color} />
        }}
      />


     
    </Tabs>


  );
}
