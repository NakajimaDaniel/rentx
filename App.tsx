
import AppLoading from 'expo-app-loading';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo';
import {
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';

import { Home }  from './src/screens/Home';
import theme from './src/styles/theme';
import { CarDetails } from './src/screens/CarDetails';
import { Scheduling } from './src/screens/Scheduling';
import { RentDetails } from './src/screens/RentDetails';


export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <RentDetails />
    </ThemeProvider>

  );
}

