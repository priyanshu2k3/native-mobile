import React from 'react';
import styled from 'styled-components/native';
import {View as CardActionArea} from 'react-native';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.SURFACES.CARD_ACTION_AREA];

export const SCCardActionArea = styled(
  CardActionArea,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
