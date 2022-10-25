import React from "react";
import { Text, View } from "react-native";
interface Props {
    title: string
}
export default function Header({ title }: Props) {
    return (
        <View
            style={{
                marginTop: 25,
                height: "7%",
                width: "100%",
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderColor: "#DCDCDC"
            }}>
            <Text style={{ fontSize: 20 }}>{title}</Text>
        </View>
    )
}