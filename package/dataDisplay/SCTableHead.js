import React from 'react';
import styled from 'styled-components/native';
import {DataTable} from 'react-native-paper';
import {getEffectiveStyle, CoreClasses} from '@wrappid/styles';

const defaultStyleClasses = [CoreClasses.SC.DATA_DISPLAY.TABLE_HEAD];

export const SCTableHead = styled(
  DataTable.Header,
  {},
)(props => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
