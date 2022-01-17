
import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../../components/BackButton'
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { PasswordInput } from '../../../components/PasswordInput';
import api from '../../../services/api';


import { 
  Container, 
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle
} from './styles'

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  }
}


export function SecondStep() {

  const [password, setPassword] = useState('');
  const [passwordConfirmed, setPasswordConfirmed] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();

  const { user } = route.params as Params;

  function handleBack() {
    navigation.goBack();
  }

  async function handleRegister() {
    if(!password || !passwordConfirmed) {
      return Alert.alert("Informe a senha");
    }

    if(password != passwordConfirmed) {
      return Alert.alert("As senhas não são iguais");
    }

    await api.post('/users', {
      name: user.name,
      email: user.email,
      password,
      driver_license: user.driverLicense
    })
    .then(() => {
      navigation.navigate('Confirmation', {
        nextScreenRoute: "SignIn",
        title: "Conta Criada!",
        message: `Agora é so fazer login\ne aproveitar`
      })
    })
    .catch(() => {
      Alert.alert('Nao foi possivel cadastrar')
    });

  }

  return (
    <KeyboardAvoidingView behavior="position" enabled >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <Container>
        <Header>
          <BackButton 
            onPress={handleBack}
          />
          <Steps>
            <Bullet  />
            <Bullet  />
          </Steps>

        </Header>

        <Title>
          Crie sua {'\n'} conta
        </Title>
        <SubTitle>
          Faça seu cadastro de {'\n'}
          forma rápida e fácil
        </SubTitle>

        <Form>
          <FormTitle>2. Senha</FormTitle>
          <PasswordInput 
            iconName="lock"
            placeholder="Senha"
            onChangeText={setPassword}
            value={password}
          />
          <PasswordInput 
            iconName="lock"
            placeholder="Repetir Senha"
            onChangeText={setPasswordConfirmed}
            value={passwordConfirmed}
          />
        </Form>

        <Button 
          title="Cadastrar"
          color= {theme.colors.success}
          onPress={handleRegister}
        />
      </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}