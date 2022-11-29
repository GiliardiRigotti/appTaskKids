import styled from 'styled-components/native';
import { colors } from '../../constants/colors';

export const Container = styled.View`
margin-top: 25px;
height: 10%;
border-width: 1px;
border-color: ${colors.gray};
padding: 5px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.white};
`;
