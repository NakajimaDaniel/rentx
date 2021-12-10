import React from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg'

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

export function Scheduling() {

  const theme = useTheme();

  return (
    <Container>

      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      
      />

      <Header>
        <BackButton 
          color={theme.colors.shape}
          onPress={() =>{}}
        />
        <Title>
          Escolha uma {'\n'}
          data de inicio e {'\n'}
          fim de aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false} ></DateValue>
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>ATE</DateTitle>
            <DateValue  selected={false} ></DateValue>
          </DateInfo>
        </RentalPeriod>

      </Header>
  
      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button 
          title="confirmar"
        />
      </Footer>

    </Container>
  )
}