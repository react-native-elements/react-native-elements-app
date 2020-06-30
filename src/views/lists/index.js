import React, { Component } from 'react';
import { Header } from '../header';

import ListContent from './content';

export default class Lists extends Component {
  render() {
    return (
      <>
        <Header title="Lists" />
        <ListContent />
      </>
    );
  }
}
