import React from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const Loader = () => {
  const override = css`
    background-color: #36846b;
  `;

  return <ClipLoader color="#36846b" css={override} size={35} />;
};

export default Loader;
