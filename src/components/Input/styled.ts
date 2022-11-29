import styled from 'styled-components/native';
import { colors } from '../../constants/colors';

export const Container = styled.View`
  width: 50%;
  margin-top: 10px;
`;

export const Title = styled.Text`
    font-size: 16px;
`;

export const TextInput = styled.TextInput`
    border-radius: 5px;
    background-color: ${colors.white};
    border-width: 1px;
    border-color: ${colors.gray};
    padding: 3PX;
`;
