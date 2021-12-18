import React from 'react';
import { Feather } from '@expo/vector-icons'
import { Calendar as CustomCalendar, LocaleConfig, DateCallbackHandler } from 'react-native-calendars';
import { generateInterval } from './generateInterval';
import { useTheme } from 'styled-components';

LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', "Abril", 'Maio', "Junho", 'Julho', 'Agosto', 'Setembro', 'Outubro', "Novembro", "Dezembro"],
  monthNamesShort: ['Jan', 'Fev', "Mar", "Abr", 'Mai', 'Jun', "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
  dayNames: [ "Domingo" ,'Segunda', "Terça", "Quarta", "Quinta", "Sexta", "Sabado"],
  dayNamesShort: [ "Dom", 'Seg', 'Ter', "Qua", "Qui", 'Sex', "Sab"],
  today: 'Hoje'
}

LocaleConfig.defaultLocale = 'pt-br';


interface MarkedDateProps {
  [date: string] : {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  },
}
interface DayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}
interface CalendarProps {
  markedDates: MarkedDateProps;
  onDayPress: DateCallbackHandler;
}

function Calendar({ onDayPress, markedDates } : CalendarProps) {

  const theme = useTheme();

  return (
    <CustomCalendar
      renderArrow={(direction) => <Feather  size={24} color={theme.colors.text} name={ direction === 'left' ? 'chevron-left' : 'chevron-right'} />}

      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10,
      }}

      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        textMonthFontFamily: theme.fonts.secondary_600,
        arrowStyle: {
          marginHorizontal: -15,
        }
      }}

      firstDay={1}
      minDate={new Date()}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}

    />
  )
}

export {
  Calendar,
  MarkedDateProps,
  DayProps,
  generateInterval,
}