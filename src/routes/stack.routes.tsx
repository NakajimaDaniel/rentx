import React from 'react';

import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import { Home }  from '../../src/screens/Home';
import { CarDetails } from '../../src/screens/CarDetails';
import { Scheduling } from '../../src/screens/Scheduling';
import { RentDetails } from '../../src/screens/RentDetails';
import { RentComplete } from '../../src/screens/RentComplete';
import { MyCars } from '../screens/MyCars';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';
import { FirstStep } from '../screens/SignUp/FirstStep';
import { SecondStep } from '../screens/SignUp/SecondStep';

const { Navigator, Screen } = createNativeStackNavigator ();


export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn" >
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
        name="RentComplete"
        component={RentComplete}
      />

      <Screen 
        name="MyCars"
        component={MyCars}
      />
    
    </Navigator>
  )
}