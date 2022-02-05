import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { useNavigation, useRoute } from '@react-navigation/native';
import Animated, { useSharedValue,useAnimatedScrollHandler, useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';
import { StatusBar, StyleSheet } from 'react-native';

import { Button } from '../../components/Button';


import { 
  Container,
  Header,
  CarImages,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer
} from './styles'
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { useTheme } from 'styled-components';
import { Car as ModelCar } from '../../database/model/car';


interface Params {
  car: CarDTO;
}

export function CarDetails() {

  const navigation = useNavigation();
  const theme = useTheme();
  const route = useRoute();
  const { car } = route.params as Params; 

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(e => {
    scrollY.value = e.contentOffset.y;
  })

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(scrollY.value, [0, 200], [200, 70], Extrapolate.CLAMP)
    }
  })

  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [1, 0])
    }
  })

  function handleConfirmationButton() {
    navigation.navigate("Scheduling", { car })
  }

  function handleBack() {
    navigation.goBack();
  }


  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Animated.View
        style={[headerStyleAnimation, style.header, { backgroundColor: theme.colors.background_secondary }]}
      >
        <Header>
          <BackButton onPress={handleBack}/>
        </Header>
        <Animated.View style={[sliderCarsStyleAnimation]}>
          <CarImages>
            <ImageSlider imagesUrl={car.photos} />
          </CarImages>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView 
        contentContainerStyle= {{
          paddingHorizontal: 24,
          paddingTop: getStatusBarHeight() + 160,
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.period}</Period>
            <Price>R$ {car.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {
            car.accessories.map(accessories => (
              <Accessory key={accessories.type}  name={accessories.name} icon={getAccessoryIcon(accessories.type)} />
            ))
          }

        </Accessories>

        <About>
          {car.about}
          {car.about}
          {car.about}
          {car.about}
        </About>
      </Animated.ScrollView>
      
      <Footer>
        <Button title="Escolher periodo de aluguel" onPress={handleConfirmationButton} />
      </Footer>

    </Container>
  )
}

const style = StyleSheet.create({
  header: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1,
  },

})