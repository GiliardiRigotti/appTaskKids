import styled from 'styled-components/native';
import { colors } from '../../constants/colors';

export const Container = styled.TouchableOpacity`
    background-color: ${colors.red};
    width: 50px;
    height: 50px;
    border-radius: 10px;
`;

export const Title = styled.Text`
    font-size: 20px;
    color:${colors.white};
`;