import React from "react";

import { Header, Highlight, Button, Input } from "@components/index";

import * as S from "./styles";

const NewGroup = (): JSX.Element => {
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
        <Button title="Criar" style={{ marginTop: 20 }} />
      </S.Content>
    </S.Container>
  );
};

export default NewGroup;
