import React, {useState} from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";

import Dashboard from "./Pages/Dashboard";
import Hospital from "./Pages/Hospital";
import HospitalDetailes from "./Pages/HospitalDetailes";
import Profile from "./Pages/Profile";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loadData, setLoadData]= useState(false);


  return (
   
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} options = {{headerTitle:'Dashboard'}} />
        <Stack.Screen name="Hospital" component={Hospital}options = {{headerTitle: 'Hospital'}}/>
        <Stack.Screen name="HospitalDetailes" component={HospitalDetailes}options = {{headerTitle: 'HospitalDetailes'}}/>
        <Stack.Screen name="Profile" component={Profile}options = {{headerTitle: 'Profile'}}/>

      </Stack.Navigator>
    </NavigationContainer>
    
  )
}