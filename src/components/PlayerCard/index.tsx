import ButtonIcon from "@components/ButtonIcon";
import React, { memo } from "react";

import * as S from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
};

const PlayerCard = ({ name, onRemove }: Props): JSX.Element => {
  return (
    <S.Container>
      <S.Icon name="person" />
      <S.Name>{name}</S.Name>

      <ButtonIcon icon="close" type="secondary" onPress={onRemove} />
    </S.Container>
  );
};

export default memo(PlayerCard);
