import React from 'react';
import styled from 'styled-components/native';
import {View as Popover} from 'react-native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.UTILS.POPOVER];

export const SCPopover = styled(
  Popover,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
