import { Container, Title } from "./styled";

interface Props {
    onPress: () => void;
}

export default function ButtonAdd({ onPress }: Props) {
    return (
        <Container onPress={onPress}>
            <Title>
                +
            </Title>
        </Container>
    )
}