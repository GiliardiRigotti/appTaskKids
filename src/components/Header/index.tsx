import React from "react";
import { Text, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import { Container } from "./styled";
import { useNavigation } from "@react-navigation/native";

interface Props {
    title: string
    home?: boolean
}
export default function Header({ title, home = false }: Props) {
    const navigation = useNavigation()

    function handleAddTask() {
        navigation.navigate("Login")
    }
    return (
        <Container>
            <Text style={{ fontSize: 18 }}>{title}</Text>
            {
                home && <Icon name="plus-circle-outline" size={30} color="red" onPress={handleAddTask} />
            }
        </Container>
    )
}