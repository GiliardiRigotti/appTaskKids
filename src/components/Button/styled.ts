import styled from 'styled-components/native';
import { colors } from '../../constants/colors';

export const Container = styled.TouchableOpacity`
  background-color: ${colors.pink};
  padding: 3px;
  border-radius: 5px;
  width: 30%;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.white};
`;
