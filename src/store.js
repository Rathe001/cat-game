import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import myThingReducer from 'components/MyThing/MyThing-redux';

const store = createStore(myThingReducer);

export default store;