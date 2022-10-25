import { useState, useContext } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../../components/Header";
import { AppContext } from "../../context";

export default function CreateTask() {
    const [form, setForm] = useState({ title: '', value: 0 })
    const { addTask } = useContext(AppContext)
    function handleCreateTask() {
        if (form.title == "" && form.value == 0) {
            alert("Favor preencher os campos")
            return
        }
        console.log(form)
        addTask(form)
        //alert("Adicionada nova Tarefa")
    }
    return (
        <>
            <Header title="Criar Tarefa" />
            <View style={{ flex: 1, backgroundColor: "#FFEFD5" }}>
                <View style={{ width: "50%", marginLeft: 10, marginTop: 15 }}>
                    <Text>Tarefa</Text>
                    <TextInput onChangeText={value => setForm({ ...form, title: value })} style={{ backgroundColor: "white", padding: 3, borderWidth: 1, borderColor: "#DCDCDC" }} />
                </View>
                <View style={{ width: "50%", marginLeft: 10, marginTop: 15 }}>
                    <Text>Valor</Text>
                    <TextInput onChangeText={value => setForm({ ...form, value: parseInt(value, 10) })} keyboardType="decimal-pad" style={{ backgroundColor: "white", padding: 3, borderWidth: 1, borderColor: "#DCDCDC" }} />
                </View>
                <TouchableOpacity onPress={handleCreateTask} style={{ marginTop: 10, backgroundColor: "#D8BFD8", width: "25%", height: 30, alignItems: "center", alignSelf: "center", borderRadius: 4 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>Criar</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}