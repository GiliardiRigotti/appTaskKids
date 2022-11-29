import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import { Container, Title } from "./styled";

interface Props {
    title: string;
    checked: boolean;
    onPress: () => void;
}
export default function Checkbox({ title, checked, onPress }: Props) {
    return (
        <Container onPress={onPress}>
            {
                checked ? (
                    <Icon name="checkbox-outline" size={30} />
                ) : (
                    <Icon name="checkbox-blank-outline" size={30} />
                )
            }
            <Title> {title}</Title>
        </Container>
    )
}