import React, { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { groupGetAll } from "@storage/group/groupGetAll";

import {
  Header,
  Highlight,
  GroupCard,
  ListEmpty,
  Button,
} from "@components/index";

import * as S from "./styles";

const Groups = (): JSX.Element => {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  const handleNewGroup = useCallback(() => {
    navigation.navigate("NewGroup");
  }, [navigation]);

  const fetchGroups = useCallback(async () => {
    try {
      const data = await groupGetAll();

      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleOpenGroup = useCallback(
    (group: string) => {
      navigation.navigate("Players", { group });
    },
    [navigation]
  );

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </S.Container>
  );
};

export default Groups;
