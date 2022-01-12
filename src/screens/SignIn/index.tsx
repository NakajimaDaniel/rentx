
import React, { useState } from 'react';
import { KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

import { Container, Header, SubTitle, Title, Footer, Form } from './styles'

export function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();

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
              onPress={() => {}}
              enabled={false}
              loading={false}
            />

            <Button 
              title="Criar conta gratuita"
              onPress={() => {}}
              enabled={false}
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