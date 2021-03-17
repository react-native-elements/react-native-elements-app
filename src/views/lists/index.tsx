import React from 'react';
import { Header } from '../header';
import ListContent from './content';

type ListComponentProps = {};

const Lists: React.FunctionComponent<ListComponentProps> = () => {
  return (
    <>
      <Header title="Lists" />
      <ListContent />
    </>
  );
};

export default Lists;
