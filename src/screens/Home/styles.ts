import { FlatList } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Car as ModelCar } from '../../database/model/car';

export const Container = styled.View `
  flex: 1; 
  background-color: ${({ theme }) => theme.colors.background_primary};

`


export const Header = styled.View `
  width: 100%;
  height: 113px;

  background-color: ${({ theme }) => theme.colors.header};

  justify-content: flex-end;
  padding: 32px 24px;

`

export const HeaderContent = styled.View `
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`


export const TotalCars = styled.Text `
  font-size: ${RFValue(15)}px;

  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`


export const CarList = styled(FlatList as new () => FlatList<ModelCar>).attrs({
  contentContainerStyle:{
    padding:24
  },
  showsVerticalScrollIndicator: false,


}) ``


