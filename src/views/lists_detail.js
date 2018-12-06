import React, { Component } from 'react';

import { Card } from 'react-native-elements';

class IconsDetail extends Component {
  ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }

  render() {
    return (
      <Card
        title="RATINGS"
        containerStyle={{ marginTop: 15, marginBottom: 15 }}
      />
    );
  }
}

export default IconsDetail;
