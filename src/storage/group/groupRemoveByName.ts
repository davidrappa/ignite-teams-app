import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "../storageConfig";

import { groupGetAll } from "./groupGetAll";

export const groupRemoveByName = async (deletedGroup: string) => {
  try {
    const storedGroups = await groupGetAll();
    const groups = storedGroups.filter((group) => group !== deletedGroup);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${deletedGroup}`);
  } catch (error) {
    throw error;
  }
};
