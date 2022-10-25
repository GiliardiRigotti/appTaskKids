import { useNavigation } from "@react-navigation/native";
import { useState, useContext, useEffect } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../../components/Header";
import { AppContext } from "../../context";

export default function Subscribe() {
    const navigation = useNavigation()
    const { createUser, user } = useContext(AppContext)
    const [form, setForm] = useState({
        name: "",
        password: "",
        children: "",
    })
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
    useEffect(() => {
        function checkUser() {
            if (user !== null) {
                navigation.navigate("Home")
            }
        }
        checkUser()
    }, [])
    return (
        <>
            <Header title="Cadastro" />
            <View style={{ flex: 1, backgroundColor: "#FFEFD5" }}>
                <View style={{ width: "50%", marginLeft: 10, marginTop: 15 }}>
                    <Text>Nome</Text>
                    <TextInput onChangeText={value => setForm({ ...form, name: value })} style={{ backgroundColor: "white", padding: 3, borderWidth: 1, borderColor: "#DCDCDC" }} />
                </View>
                <View style={{ width: "50%", marginLeft: 10, marginTop: 15 }}>
                    <Text>Crie uma senha</Text>
                    <TextInput secureTextEntry onChangeText={value => setForm({ ...form, password: value })} style={{ backgroundColor: "white", padding: 3, borderWidth: 1, borderColor: "#DCDCDC" }} />
                </View>
                <View style={{ width: "50%", marginLeft: 10, marginTop: 15 }}>
                    <Text>Nome da criança</Text>
                    <TextInput onChangeText={value => setForm({ ...form, children: value })} style={{ backgroundColor: "white", padding: 3, borderWidth: 1, borderColor: "#DCDCDC" }} />
                </View>
                <TouchableOpacity onPress={handleCreateUser} style={{ marginTop: 10, backgroundColor: "#D8BFD8", width: "25%", height: 30, alignItems: "center", alignSelf: "center", borderRadius: 4 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </>

    )
}