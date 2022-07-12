import React, { ReactNode } from 'react';

interface ITitle {
  children: ReactNode;
}

const Title = ({ children }: ITitle) => {
  return <h2>{children}</h2>;
};

export default Title;
