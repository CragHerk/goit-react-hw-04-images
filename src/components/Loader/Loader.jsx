import React from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const Loader = () => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return <ClipLoader color="#123abc" css={override} size={35} />;
};

export default Loader;
