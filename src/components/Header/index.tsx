import React, { memo } from "react";

import logoImage from "@assets/logo.png";

import * as S from "./styles";

type Props = {
  showBackButton?: boolean;
};

const Header = ({ showBackButton = false }: Props): JSX.Element => {
  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton>
          <S.BackIcon />
        </S.BackButton>
      )}
      <S.Logo source={logoImage} />
    </S.Container>
  );
};

export default memo(Header);
