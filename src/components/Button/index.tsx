import { Container, Title } from "./styled";

interface Props {
    title: string;
    onPress: () => void;
}

export default function Button({ title, onPress }: Props) {
    return (
        <Container onPress={onPress}>
            <Title>
                {title}
            </Title>
        </Container>
    )
}