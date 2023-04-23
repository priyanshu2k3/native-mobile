import React, {useState} from 'react';
import {CoreClasses} from '@wrappid/styles';
import NativeTypography from '../NativeTypography';
import NativeSpan from '../../layouts/NativeSpan';
import NativeLink from '../../navigation/NativeLink';

function NativeTypographyBody1(props) {
  const {hideSeeMore = false, limitChars} = props;
  const [seeMore, setSeeMore] = useState(true);
  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  return props?.limitChars ? (
    <NativeTypography {...props} variant="body1" gutterBottom>
      <NativeSpan>
        {typeof props?.children === 'string' && seeMore
          ? limitChars > props?.children?.length
            ? props?.children
            : props?.children.slice(0, limitChars) + '...'
          : props?.children}
      </NativeSpan>
      {!hideSeeMore && limitChars < props?.children?.length && (
        <NativeLink
          styleClasses={[CoreClasses.MARGIN.ML1]}
          onClick={toggleSeeMore}>
          {seeMore ? 'See more' : 'See less'}
        </NativeLink>
      )}
    </NativeTypography>
  ) : (
    <NativeTypography {...props} variant="body1" gutterBottom>
      {props?.children}
    </NativeTypography>
  );
}

export default NativeTypographyBody1;
