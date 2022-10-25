import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import { AppContext } from "../../context";

export default function Login() {
    const [form, setForm] = useState({ name: "", password: "" })
    const { login } = useContext(AppContext)
    const navigation = useNavigation()
    function handleSingIn() {
        if (form.name == "" || form.password == "") {
            alert("Favor preencher todos os campos")
            return
        }
        if (login(form)) {
            navigation.navigate("CreateTask")
        } else {
            alert("Verificar se o Login e a Senha estão corretos")
        }

    }
    return (
        <>
            <Header title="Acesso Restrito" />
            <View style={{ flex: 1, backgroundColor: "#FFEFD5", alignItems: "center", justifyContent: "center" }}>
                <View style={{ width: "50%", marginLeft: 10, marginTop: 15 }}>
                    <Text>Login</Text>
                    <TextInput onChangeText={value => setForm({ ...form, name: value })} style={{ backgroundColor: "white", padding: 3, borderWidth: 1, borderColor: "#DCDCDC" }} />
                </View>
                <View style={{ width: "50%", marginLeft: 10, marginTop: 15 }}>
                    <Text>Senha</Text>
                    <TextInput onChangeText={value => setForm({ ...form, password: value })} style={{ backgroundColor: "white", padding: 3, borderWidth: 1, borderColor: "#DCDCDC" }} />
                </View>
                <TouchableOpacity onPress={handleSingIn} style={{ marginTop: 10, backgroundColor: "#D8BFD8", width: "25%", height: 30, alignItems: "center", borderRadius: 4 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>Logar</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}