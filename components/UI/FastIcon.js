import React from 'react';

import { SvgIcon } from '@material-ui/core';

import '../../public/sprite.svg';


export default function FastIcon({ iconName, text, width = 17, height = 17, ...rest }) {
  return (
    <SvgIcon {...rest} style={{ width, height }}>
      <use xlinkHref={`/sprite.svg#${iconName}`} />
    </SvgIcon>
  );
}
