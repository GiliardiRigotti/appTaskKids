import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import CreateTask from '../screens/CreateTask';
import Subscribe from '../screens/Subscribe';
import DetailTask from '../screens/DetailsTask';
import FirstAcess from '../screens/FirstAcess';
import { AppProvider } from '../context';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppProvider>
                <Stack.Navigator initialRouteName='Subscribe' screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="CreateTask" component={CreateTask} />
                    <Stack.Screen name="Subscribe" component={Subscribe} />
                    <Stack.Screen name="DetailTask" component={DetailTask} />
                    <Stack.Screen name="FirstAcess" component={FirstAcess} />
                </Stack.Navigator>
            </AppProvider>
        </NavigationContainer>
    );
}