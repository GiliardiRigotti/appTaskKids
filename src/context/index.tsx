import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AppContextData {
    createUser(form: { name: string, password: string, children: string }): boolean;
    login(form: { name: string, password: string }): boolean;
    tasks: object[];
    user: { name: string, password: string, children: string };
    addTask(item: object): void;
    subTask(id: number): void;
}

const AppContext = createContext({} as AppContextData)

function AppProvider({ children }: any) {
    const [tasks, setTasks] = useState<object[]>([])
    const [user, setUser] = useState<{ name: string, password: string, children: string } | null>(null)

    async function createUser(form: { name: string, password: string, children: string }) {
        try {
            setUser(form)
            await AsyncStorage.setItem("@appTaskKids:user", JSON.stringify(form))
            return true
        } catch (error) {
            console.log(error)
            alert("Error ao criar o cadastro")
            return false
        }
    }

    function login(form: { name: string, password: string }) {
        if (user?.name == form.name && user.password == form.password) {
            return true
        }
        return false
    }

    async function addTask(item: object) {
        const listItems: object[] = tasks || []
        listItems.push(item)
        console.log(listItems)
        setTasks(listItems)
        await AsyncStorage.setItem("@appTaskKids:tasks", JSON.stringify(listItems))
        alert('Adicionado!')
    }
    async function subTask(id: number) {
        console.log('Id:' + id)
        const listItems: object[] = tasks
        console.log(listItems.splice(id, 1))
        console.log(listItems)
        setTasks(listItems)
        alert('Removido!')
        await AsyncStorage.setItem("@appTaskKids:tasks", JSON.stringify(listItems))
    }

    useEffect(() => {
        async function getData() {
            const tasksStorage = await AsyncStorage.getItem("@appTaskKids:tasks")
            const userStorage = await AsyncStorage.getItem("@appTaskKids:user")
            console.log(tasksStorage)
            console.log(userStorage)
            const listTasks = tasksStorage ? JSON.parse(tasksStorage) : null
            const userSign = userStorage ? JSON.parse(userStorage) : null
            setTasks(listTasks)
            setUser(userSign)
        }
        getData()
    }, [])
    return (
        <AppContext.Provider value={{ createUser, tasks, addTask, subTask, user, login }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext }