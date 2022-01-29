import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { BackButton } from '../../components/BackButton'
import { Feather } from '@expo/vector-icons'


import { 
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  LogoutButton,
  PhotoContainer,
  Photo,
  PhotoButton,
  Content,
  Options,
  Option,
  OptionTitle,
} from './styles'


export function Profile() {

  const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');

  const theme = useTheme();
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleSignOut() {
    
  }

  function handleOptionChange(optionSelected: 'dataEdit' | 'passwordEdit') {
    setOption(optionSelected);
  }

  return (
    <Container>
      <Header>
        <HeaderTop>
          <BackButton  color={theme.colors.shape} onPress={handleBack} />
          <HeaderTitle>Editar Perfil</HeaderTitle>
          <LogoutButton  onPress={handleSignOut}>
            <Feather name="power" size={24} color={theme.colors.shape} />
          </LogoutButton>
        </HeaderTop>

        <PhotoContainer>
          <Photo  source={{uri: 'https://avatars.githubusercontent.com/u/59265044?v=4'}} />
          <PhotoButton  onPress={() => {}} >
            <Feather name="camera" size={24}  colors={theme.colors.shape} />
          </PhotoButton> 
        </PhotoContainer>
      </Header>

      <Content>
        <Options>
          <Option active={option === 'dataEdit'} onPress={() => handleOptionChange('dataEdit')} >
            <OptionTitle active={option === 'dataEdit'}>
              Dados
            </OptionTitle>
          </Option>
          <Option active={option === 'passwordEdit'}  onPress={() => handleOptionChange('passwordEdit')}  >
            <OptionTitle active={option === 'passwordEdit'}>
              Trocar senha
            </OptionTitle>
          </Option>
        </Options>
      </Content>
    </Container>
  )
}