import React from 'react'
import { useWindowDimensions } from 'react-native';

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


export function RentComplete() {

  const { width } = useWindowDimensions();

  return (
    <Container>
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
        <ConfirmButton title="ok" />
      </Footer>
    </Container>
  )
}