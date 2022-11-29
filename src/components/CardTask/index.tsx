import React from "react";
import { Container, Title } from "./styled";
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import { useNavigation } from "@react-navigation/native";

interface Props {
    title: string;
    id: number;
}

export default function CardTask({ title, id }: Props) {
    const navigation = useNavigation()
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Icon name="dots-vertical" size={25} onPress={() => navigation.navigate("DetailTask", { id: id })} />
        </Container>
    )
}