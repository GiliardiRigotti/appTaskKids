import { useNavigation } from "@react-navigation/native";
import Balance from "../../components/Balance";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Container, Wrapper } from "./styled";

export default function MyBalance() {
    const navigation = useNavigation()

    function handleGoBack() {
        navigation.navigate("Home")
    }
    return (
        <>
            <Header title="Meu Saldo" />
            <Container>
                <Balance />
                <Button title="Voltar" onPress={handleGoBack} />
            </Container>
        </>
    )
}