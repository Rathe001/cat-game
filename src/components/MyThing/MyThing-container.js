import React from 'react';
import { connect } from 'react-redux';

import MyThing from './MyThing-view';

const mapStateToProps = (state) => {
  const { myThings } = state
  return { myThings }
};

export default connect(mapStateToProps)(MyThing);