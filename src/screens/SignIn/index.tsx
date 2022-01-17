
import React, { useState } from 'react';
import * as Yup from 'yup';
import { KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

import { Container, Header, SubTitle, Title, Footer, Form } from './styles'
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

export function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();

  const navigation = useNavigation();
  const { signIn } = useAuth();

  function handleNewAccount() {
    navigation.navigate("SignUpFirstStep")
  }

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required("E-mail Obrigatório").email("Digite um email válido"),
        password: Yup.string().required("Senha obrigatória"),
  
      })
      await schema.validate({email, password });

      signIn({ email, password });

    } catch(e) {
      if(e instanceof Yup.ValidationError) {
        return Alert.alert(e.message)
      } else {
        return Alert.alert('Erro na autenticação')
      }
    }

  }

  return (
    <KeyboardAvoidingView behavior="position"  enabled >
      <TouchableWithoutFeedback  onPress={Keyboard.dismiss} >
        <Container>
          <StatusBar 
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          <Header>
            <Title>Estamos {'\n'}quase lá.</Title>
            <SubTitle>Faça seu login para começar{'\n'}uma experiência incrivel.</SubTitle>
          </Header>

          <Form>
            <Input 
              iconName="mail"
              placeholder="E-mail"
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={setEmail}
              value={email}
            />

            <PasswordInput 
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
          </Form>

          <Footer>
            <Button 
              title="login"
              onPress={handleSignIn}
              enabled={false}
              loading={false}
            />

            <Button 
              title="Criar conta gratuita"
              onPress={handleNewAccount}
              enabled={true}
              loading={false}
              color={theme.colors.background_secondary}
              light={true}
            />

          </Footer>

        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}