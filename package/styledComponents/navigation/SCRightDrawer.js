import React from "react";
import styled from "styled-components/native";
import { Drawer } from "react-native-paper";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import { theme } from "../theme/theme";

const defaultStyleClasses = [StyledComponentsClasses.NAVIGATION.DRAWER];

export const SCRightDrawer = styled(Drawer.Section, {})((props) => ({}));
