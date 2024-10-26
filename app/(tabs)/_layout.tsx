import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { setBackgroundColorAsync } from 'expo-system-ui';

export default function TabLayouts() {
    return  (
        <Tabs
        screenOptions={{
            tabBarStyle: {
                backgroundColor: Colors.green
            },
            tabBarActiveTintColor: Colors['light'].tint,
            headerShown: false,
            tabBarShowLabel: true,
            tabBarLabelStyle: {
                color: Colors.black
            }
        }}>
        <Tabs.Screen
            name="index"
            options={{
                title: 'Prematch',
                tabBarIcon: ({ color, focused }) => (
                    <MaterialCommunityIcons name={focused ? 'alpha-p-box' : 'alpha-p-box-outline'} size={28} color={Colors.black} />
                ),
                
            }}
        />
        <Tabs.Screen
            name="auto"
            options={{
                title: 'Auto',
                tabBarIcon: ({ color, focused }) => (
                    <MaterialCommunityIcons name={focused ? 'alpha-a-box' : 'alpha-a-box-outline'}  size={28} color={Colors.black} />
                )
            }}
        />
        <Tabs.Screen
            name="teleop"
            options={{
                title: 'Teleop',
                tabBarIcon: ({ color, focused }) => (
                    <MaterialCommunityIcons name={focused ? 'alpha-t-box' : 'alpha-t-box-outline'} size={28} color={Colors.black} />
                )
            }}
        />
        <Tabs.Screen
            name="endgame"
            options={{
                title: 'Endgame',
                tabBarIcon: ({ color, focused }) => (
                    <MaterialCommunityIcons name={focused ? 'alpha-e-box' : 'alpha-e-box-outline'} size={28} color={Colors.black} />
                )
            }}
        />
        <Tabs.Screen
            name="summary"
            options={{
                title: 'Summary',
                tabBarIcon: ({ color, focused }) => (
                    <MaterialCommunityIcons name={focused ? 'alpha-s-box' : 'alpha-s-box-outline'} size={28} color={Colors.black} />
                )
            }}
        />
        <Tabs.Screen
            name="qr-code"
            options={{
                title: 'QR Code',
                tabBarIcon: ({ color, focused }) => (
                    <MaterialCommunityIcons name={focused ? 'alpha-q-box' : 'alpha-q-box-outline'} size={28} color={Colors.black} />
                )
            }}
        />
        </Tabs>
    );
}