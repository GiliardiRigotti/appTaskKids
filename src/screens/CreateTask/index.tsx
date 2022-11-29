import { useNavigation } from "@react-navigation/native";
import { useState, useContext } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { AppContext } from "../../context";
import { Container } from "./styled";

export default function CreateTask() {
    const navigation = useNavigation()
    const [form, setForm] = useState({ title: '', value: 0, done: false })
    const { addTask } = useContext(AppContext)
    function handleCreateTask() {
        if (form.title == "" && form.value == 0) {
            alert("Favor preencher os campos")
            return
        }
        console.log(form)
        addTask(form)
        alert("Adicionada nova Tarefa")
        navigation.navigate("Home")
    }
    return (
        <>
            <Header title="Criar Tarefa" />
            <Container>
                <Input title="Tarefa" onChangeText={value => setForm({ ...form, title: value })} />
                <Input title="Valor" onChangeText={value => setForm({ ...form, value: parseInt(value, 10) })} keyboardType="decimal-pad" />
                <Button title="Salvar" onPress={handleCreateTask} />
            </Container>
        </>
    )
}