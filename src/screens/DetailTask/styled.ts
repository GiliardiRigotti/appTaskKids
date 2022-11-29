import styled from 'styled-components/native';
import { colors } from '../../constants/colors';

export const Container = styled.View`
  flex:1;
  width: 100%;
  background-color: ${colors.background};
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.View`
    margin-top: 10px;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
`;
