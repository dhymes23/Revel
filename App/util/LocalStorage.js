import { AsyncStorage } from "react-native";

// import AsyncStorage from '@react-native-community/async-storage';
// yarn add @react-native-community/async-storage
// react-native link @react-native-community/async-storage

const KEY = "@Revel/ingredients";

export const getIngredients = () =>
    AsyncStorage.getItem(KEY).then(str => {
        if (str) {
            return JSON.parse(str);
        }

        return [];
    });

export const addIngredients = item =>
    getIngredients().then(history => {
        const oldHistory = history.filter(
            existingItem => existingItem.ingredients !== item.ingredients
        );
        const newHistory = [item, ...oldHistory];

        return AsyncStorage.setItem(KEY, JSON.stringify(newHistory));
    });
