import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import Balance from "../../components/Balance";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Header from "../../components/Header";
import Value from "../../components/Value";
import { AppContext } from "../../context";
import { Container, Wrapper } from "./styled";

export default function DetailTask() {
    const navigation = useNavigation()
    const { tasks } = useContext(AppContext)
    const [task, setTask] = useState(null);
    const route = useRoute()
    const { id } = route.params

    useEffect(() => {
        function getTask() {
            setTask(tasks[id])
        }
        getTask()
    }, [])

    function handleGoBack() {
        navigation.navigate("Home")
    }

    function handleSaveTask() {
        tasks.pop(id);
        tasks.push(task);
        alert("Salvo a alteração da tarefa")
    }

    if (task == null) {
        return (
            <>
                <Header title="Carregando..." />
            </>
        )
    }
    return (
        <>
            <Header title={task.title} />
            <Container>
                <Wrapper>
                    <Checkbox title="Feito" checked={task.done} onPress={() => setTask({ ...task, done: !task.done })} />
                    <Checkbox title="Não Feito" checked={!task.done} onPress={() => setTask({ ...task, done: !task.done })} />
                </Wrapper>
                <Value value={task.value} />
                <Wrapper>
                    <Button title="Voltar" onPress={handleGoBack} />
                    <Button title="Salvar" onPress={handleSaveTask} />
                </Wrapper>
            </Container>
        </>
    )
}