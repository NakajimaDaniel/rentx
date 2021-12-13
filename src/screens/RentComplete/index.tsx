import React from 'react'
import { StatusBar, useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg';

import {
  Container,
  Content,
  Title,
  Message,
  Footer,
} from './styles'
import { ConfirmButton } from '../../components/ConfirmButton';
import { useNavigation } from '@react-navigation/native';


export function RentComplete() {

  const { width } = useWindowDimensions();

  
  const navigation = useNavigation();

  function handleConfirmationButton() {
    navigation.navigate("Home")
  }


  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg  width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro Alugado!</Title>

        <Message>
          Agora você só precisa ir {'\n'}
          até uma concessionária da RENTX {'\n'}
          pagar o seu automóvel
        </Message>

      </Content>

      <Footer>
        <ConfirmButton title="ok" onPress={handleConfirmationButton}/>
      </Footer>
    </Container>
  )
}