import * as React from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/Components/Home/Home'
import DetailsScreen from './src/Components/Details/Details'
import CreatePostScreen from './src/Components/Post/Post'
import Prompt from './src/Components/Prompt/Prompt'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode='modal'>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Overview' }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{ itemId: 49 }}
        />
        <Stack.Screen
          name="CreatePost"
          component={CreatePostScreen}
        />
        <Stack.Screen
          name='Prompt'
          component={Prompt}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
