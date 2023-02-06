import React, { memo, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

import logoImage from "@assets/logo.png";

import * as S from "./styles";

type Props = {
  showBackButton?: boolean;
};

const Header = ({ showBackButton = false }: Props): JSX.Element => {
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    navigation.navigate("Groups");
  }, [navigation]);

  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton onPress={handleGoBack}>
          <S.BackIcon />
        </S.BackButton>
      )}
      <S.Logo source={logoImage} />
    </S.Container>
  );
};

export default memo(Header);
