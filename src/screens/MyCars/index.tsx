import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { CarDTO } from '../../dtos/CarDTO';
import api from '../../services/api';

import {
  Container,
} from './styles'


export function MyCars() {

  const [ cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

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

    </Container>
  )
}