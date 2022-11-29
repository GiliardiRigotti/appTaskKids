import { useContext, useEffect, useState } from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import { AppContext } from "../../context";
import { Container, Title } from "./styled";

export default function Balance() {
    const { tasks } = useContext(AppContext)
    const [balance, setBalance] = useState<number>(0)
    useEffect(() => {
        function getBalance() {
            tasks.map(item => {
                if (item.done) {
                    setBalance(item.value + balance)
                }
            })
        }
        getBalance()
    }, [])
    return (
        <Container>
            <Icon name="plus-circle-outline" size={20} />
            <Title>
                {balance},00
            </Title>
        </Container>
    )
}