import React from "react";
import { Container, TextInput, Title } from "./styled";

interface Props {
    title: string;
    placeholder?: string;
    onChangeText: () => void;
    secureTextEntry: boolean;
}
export default function Input({ title, placeholder, onChangeText, secureTextEntry = false }: Props) {
    return (
        <Container>
            <Title>{title}</Title>
            <TextInput secureTextEntry={secureTextEntry} placeholder={placeholder || ""} onChangeText={onChangeText} />
        </Container>

    )
}