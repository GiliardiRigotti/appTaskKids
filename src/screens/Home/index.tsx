import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import { AppContext } from "../../context";

export default function Home() {
    const { user, tasks } = useContext(AppContext)
    const navigation = useNavigation()
    function handleAddTask() {
        navigation.navigate("Login")
    }
    if (user == null) {
        <View>
            <Text>Carregando...</Text>
        </View>
    }
    return (
        <>
            <Header title={`Ola ${user.children}, essas são as suas tarefas`} />
            {tasks ? (
                <View style={{ flex: 1, backgroundColor: "#FFEFD5", alignItems: "center" }}>
                    {tasks.map((item, index) => (
                        <View key={index} style={{ width: "95%", height: "10%", flexDirection: "row", justifyContent: "center", backgroundColor: "white", alignItems: "center", borderRadius: 5 }}>
                            <Text style={{ fontSize: 20 }}>
                                {item.title}
                            </Text>

                        </View>
                    ))}

                </View>
            ) : (
                <View style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}>
                    <Text>
                        Não tem mais tarefas
                    </Text>
                </View>
            )}
            <TouchableOpacity onPress={handleAddTask} style={{ position: "absolute", bottom: 10, right: 10, width: 60, height: 60, borderRadius: 30, backgroundColor: "pink", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 45, fontWeight: "bold", color: "white" }}>+</Text>
            </TouchableOpacity>
        </>
    )
}