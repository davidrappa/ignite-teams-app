import React, { memo } from "react";

import * as S from "./styles";

type Props = {
  message: string;
};

const ListEmpty = ({ message }: Props): JSX.Element => {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
};

export default memo(ListEmpty);
