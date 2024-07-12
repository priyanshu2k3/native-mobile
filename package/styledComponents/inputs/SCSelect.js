// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import DropDown from "react-native-paper-dropdown";
import styled from "styled-components/native";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.SELECT];

export const SCSelect = styled(
  DropDown,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
