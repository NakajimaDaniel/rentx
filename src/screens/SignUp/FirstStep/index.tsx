
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { BackButton } from '../../../components/BackButton'
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import * as Yup from 'yup'

import { 
  Container, 
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle
} from './styles'


export function FirstStep() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [driverLicense, setDriverLicense] = useState('');

  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  async function handleNextStep() {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatorio"),
        email: Yup.string().email("E-mail invalido").required("E-mail obrigatorio"),
        driverLicense: Yup.string().required("CNH é obrigatorio")
      })

      const data = {name, email, driverLicense};
      await schema.validate(data);

      navigation.navigate('SignUpSecondStep', {user: data})
    } catch(e) {
      if(e instanceof Yup.ValidationError) {
        return Alert.alert(e.message)
      }
    }
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
          <FormTitle>1. Dados</FormTitle>
          <Input 
            iconName="user"
            placeholder="Nome"
            onChangeText={setName}
            value={name}
          />
          <Input 
            iconName="mail"
            placeholder="Email"
            keyboardType='email-address'
            onChangeText={setEmail}
            value={email}
          />
          <Input 
            iconName="credit-card"
            placeholder="CNH"
            keyboardType="numeric"
            onChangeText={setDriverLicense}
            value={driverLicense}
          />
        </Form>

        <Button 
          title="Proximo"
          onPress={handleNextStep}
        />
      </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}