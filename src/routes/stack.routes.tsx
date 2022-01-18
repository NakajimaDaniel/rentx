import React from 'react';

import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import { Home }  from '../../src/screens/Home';
import { CarDetails } from '../../src/screens/CarDetails';
import { Scheduling } from '../../src/screens/Scheduling';
import { RentDetails } from '../../src/screens/RentDetails';
import { Confirmation } from '../screens/Confirmation';
import { MyCars } from '../screens/MyCars';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';
import { FirstStep } from '../screens/SignUp/FirstStep';
import { SecondStep } from '../screens/SignUp/SecondStep';

const { Navigator, Screen } = createNativeStackNavigator ();


export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home" >
      <Screen 
        name="SignIn"
        component={SignIn}
      />
      <Screen 
        name="SignUpFirstStep"
        component={FirstStep}
      />
      <Screen 
        name="SignUpSecondStep"
        component={SecondStep}
      />
      <Screen 
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
      <Screen  
        name="CarDetails"
        component={CarDetails}
      />
      <Screen 
        name="Scheduling"
        component={Scheduling}
      />
      <Screen 
        name="RentDetails"
        component={RentDetails}
      />

      <Screen 
        name="Confirmation"
        component={Confirmation}
      />

      <Screen 
        name="MyCars"
        component={MyCars}
      />
    
    </Navigator>
  )
}