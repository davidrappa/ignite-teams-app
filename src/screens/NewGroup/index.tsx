import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

import { Header, Highlight, Button, Input } from "@components/index";

import * as S from "./styles";

const NewGroup = (): JSX.Element => {
  const navigation = useNavigation();

  const handleNew = useCallback(() => {
    navigation.navigate("Players", { group: "" });
  }, []);

  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
        <Input placeholder="Nome da turma" />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </S.Content>
    </S.Container>
  );
};

export default NewGroup;
