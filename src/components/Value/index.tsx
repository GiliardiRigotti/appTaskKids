import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import { Container, Title } from "./styled";

interface Props {
    value: number;
}

export default function Value({ value }: Props) {

    return (
        <Container>
            <Icon name="plus-circle-outline" size={30} />
            <Title>
                {value},00
            </Title>
        </Container>
    )
}