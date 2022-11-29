import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Button from "../../components/Button";
import CardTask from "../../components/CardTask";
import Header from "../../components/Header";
import { AppContext } from "../../context";
import { Container } from "./styled";

export default function Home({ navigation }) {
    const { user, tasks } = useContext(AppContext)
    const [listTask, setListTask] = useState([])
    function handleBalance() {
        navigation.navigate("MyBalance")
    }
    useEffect(() => {
        const focusHandler = navigation.addListener('focus', () => {
            setListTask(tasks)
        });
        return focusHandler;
    }, [navigation])
    if (user == null) {
        <View>
            <Text>Carregando...</Text>
        </View>
    }
    return (
        <>
            <Header title={`Ola ${user.children}, essas são as suas tarefas`} home />
            <Container>
                {listTask ? (
                    <>
                        {listTask.map((item, index) => {
                            if (!item.done) {
                                return (
                                    <CardTask key={index} title={item.title} id={index} />
                                )
                            }
                        }



                        )}
                    </>

                ) : (

                    <Text>
                        Não tem mais tarefas
                    </Text>

                )}
                <Button title="Meu Saldo" onPress={handleBalance} />
            </Container>
        </>
    )
}