import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Feather } from '@expo/vector-icons';


import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';


import { 
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,

} from './styles';

import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

export function RentDetails() {

  const theme = useTheme();

  const navigation = useNavigation();

  function handleConfirmationButton() {
    navigation.navigate("RentComplete")
  }
 

  return (
    <Container>
      <Header>
        <BackButton onPress={() =>{}}/>
      </Header>
      <CarImages>
        <ImageSlider imagesUrl={['data:image/jpeg;base64,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']} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>lamborghini</Brand>
            <Name>huracan</Name>
          </Description>

          <Rent>
            <Period>ao dia</Period>
            <Price>R$ 2222</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="380lm/h"  icon={SpeedSvg} />
          <Accessory name="3.2s"  icon={AccelerationSvg} />
          <Accessory name="800hp"  icon={ForceSvg} />
          <Accessory name="Gasolina"  icon={GasolineSvg} />
          <Accessory name="Auto"  icon={ExchangeSvg} />
          <Accessory name="2 pessoas"  icon={PeopleSvg} />
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather 
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>12/15/152</DateValue>
          </DateInfo>

          <Feather 
              name="chevron-right"
              size={RFValue(10)}
              color={theme.colors.text}
            />

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>12/15/152</DateValue>
          </DateInfo>

        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 500 x3 diarias</RentalPriceQuota>
            <RentalPriceTotal>R$2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>

      </Content>
      
      <Footer>
        <Button title="Alugar agora"  color={theme.colors.success} onPress={handleConfirmationButton}  />
      </Footer>

    </Container>
  )
}