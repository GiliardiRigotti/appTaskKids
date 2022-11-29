import { useNavigation } from "@react-navigation/native";
import { useState, useContext, useEffect } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { AppContext } from "../../context";
import { Container } from "./styled";

export default function Subscribe() {
    const navigation = useNavigation()
    const { createUser, user, load } = useContext(AppContext)
    const [form, setForm] = useState({
        name: "",
        password: "",
        children: "",
    })

    function checkUser() {
        console.log(user)
        if (user) {
            navigation.navigate("Home")
        }
    }



    function handleCreateUser() {
        if (form.name == "" || form.password == "" || form.children == "") {
            alert("Favor preencher todos os campos")
            return;
        }
        if (createUser(form)) {
            alert("Salvo com sucesso")
            navigation.navigate("Home")
        }
    }
    if (load) {
        return (
            <>
                <Header title="Carregando..." />
            </>
        )
    } else {

        checkUser()

        return (
            <>
                <Header title="Cadastro" />
                <Container>
                    <Input title="Nome" onChangeText={value => setForm({ ...form, name: value })} />
                    <Input title="Crie uma senha" secureTextEntry onChangeText={value => setForm({ ...form, password: value })} />
                    <Input title="Nome da criança" onChangeText={value => setForm({ ...form, children: value })} />
                    <Button title="Salvar" onPress={handleCreateUser} />
                </Container>
            </>

        )
    }
}