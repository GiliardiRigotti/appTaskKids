import styled from 'styled-components/native';
import { colors } from '../../constants/colors';

export const Container = styled.View`
  width: 35%;
  flex-direction: row;
  background-color: ${colors.white};
  align-items: center;
  justify-content: space-around;
  border-width: 1px;
  border-color: ${colors.gray};
  margin-top: 30%;
  margin-bottom: 40%;
`;

export const Title = styled.Text`
    font-size: 30px;
`;
