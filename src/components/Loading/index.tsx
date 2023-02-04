import React, { memo } from "react";

import * as S from "./styles";

const Loading = (): JSX.Element => {
  return (
    <S.Container>
      <S.LoadingIndicator />
    </S.Container>
  );
};

export default memo(Loading);
