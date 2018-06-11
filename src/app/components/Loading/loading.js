import React from 'react';
import { ClipLoader } from 'react-spinners';

// eslint-disable-next-line
export const withLoading = Component => ({ isLoading, ...props }) => {
  if (!isLoading) {
    return <Component {...props} />;
  }
  return <ClipLoader size={100} loading={isLoading} />;
};
