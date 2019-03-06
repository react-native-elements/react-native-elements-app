import React from "react";
import { View } from 'react-native';
import PropTypes from 'prop-types';

export default class PadView extends React.Component {
  setNativeProps(props) {
    this.refs['PAD_CONTAINER_REF'].setNativeProps(props);
  }

  render() {
    const {children, pad, Component, ...props} = this.props;
    const childrens = React.Children.toArray(children);
    const { length } = childrens;
    const Container = Component || View;
    return (
      <Container ref={'PAD_CONTAINER_REF'} {...props}>
        {React.Children.map(
          childrens,
          (child, index) =>
            child && [child, index !== length - 1 && <View width={pad} />]
        )}
      </Container>
    );
  }
}

PadView.propTypes = {
  children: PropTypes.node,
  pad: PropTypes.number,
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};
