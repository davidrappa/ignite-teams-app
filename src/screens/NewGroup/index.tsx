import React, { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

import { Header, Highlight, Button, Input } from "@components/index";

import { groupCreate } from "@storage/group/groupCreate";

import { AppError } from "@utils/AppError";

import * as S from "./styles";

const NewGroup = (): JSX.Element => {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  const handleNew = useCallback(async () => {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Novo Grupo", "Informe o nome da turma");
      }

      await groupCreate(group);

      navigation.navigate("Players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message);
      } else {
        Alert.alert("Novo Grupo", "Não foi possivel criar um grupo");
      }
    }
  }, [navigation, group]);

  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
        <Input
          placeholder="Nome da turma"
          value={group}
          onChangeText={setGroup}
        />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </S.Content>
    </S.Container>
  );
};

export default NewGroup;
