import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler';

import { 
  Container, 
  InputText,
  IconContainer,
} from './styles'
import { TextInputProps } from 'react-native';

interface PasswordInputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function PasswordInput({ iconName, value, ...rest }: PasswordInputProps) {

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const theme = useTheme();

  function handleInputFocus() {
    setIsFocused(true);
  }
  
  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible(prevState => !prevState);
  }

  return (
    <Container isFocused={isFocused}>

      <IconContainer>
        <Feather 
          name={iconName}
          size={24}
          color={(isFocused || isFilled) ? theme.colors.main : theme.colors.text_detail}
        />
      </IconContainer>


      <InputText { ...rest }
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        secureTextEntry={isPasswordVisible}
      />

      <BorderlessButton onPress={handlePasswordVisibilityChange}>
      <IconContainer>
        <Feather 
          name={isPasswordVisible ? 'eye' : 'eye-off'}
          size={24}
          color={theme.colors.text_detail}
        />
      </IconContainer>
      </BorderlessButton>
    </Container>
  )
}