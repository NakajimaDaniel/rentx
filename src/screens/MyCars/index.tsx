import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';
import { CarDTO } from '../../dtos/CarDTO';
import api from '../../services/api';

import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
} from './styles'

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
}

export function MyCars() {

  const [ cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const theme = useTheme();

  function handleBack() {
    navigation.goBack();
  }


  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('schedules_byuser?user_id=1');
        setCars(response.data);
      } catch(error) {
        console.log(error.message);
        Alert.alert('erro ao carregar')
      } finally {
        setLoading(false)
      }
    }

    fetchCars();
  }, [])

  return (
    <Container>

      <Header>
        <BackButton 
          color={theme.colors.shape}
          onPress={handleBack}
        />
        <Title>
          Escolha uma {'\n'}
          data de inicio e {'\n'}
          fim de aluguel
        </Title>

        <SubTitle>
          Conforto, segurança e praticidade
        </SubTitle>
      </Header>

      <Content>
        <Appointments>
          <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
          <AppointmentsQuantity>10</AppointmentsQuantity>
        </Appointments>

        <FlatList 
          data={cars}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Car data={ item.car } />
          )}
        />
      </Content>

    </Container>
  )
}