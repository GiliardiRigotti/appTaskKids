import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Header from "../../components/Header";

export default function FirstAcess() {
    function handleOption(type: string) {

    }
    return (
        <>
            <View style={{ flex: 1, backgroundColor: "#FFEFD5", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Primeiro Acesso</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%" }}>
                    <TouchableOpacity style={{ marginTop: 10, backgroundColor: "#D8BFD8", width: "45%", height: 30, alignItems: "center", borderRadius: 4 }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>Sou Responsavel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 10, backgroundColor: "#D8BFD8", width: "45%", height: 30, alignItems: "center", borderRadius: 4 }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>Sou Filho</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}