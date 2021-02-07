import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/Home";
import Form from "./screens/Form";
import Details from "./screens/Details";

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home">
            {props => <Home {...props}/>}
          </Stack.Screen>
          <Stack.Screen name="Form">
            {props => <Form {...props}/>}
          </Stack.Screen>
          <Stack.Screen name="Details">
            {props => <Details {...props}/>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
