import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MyThing from 'components/MyThing';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={ store }>
        <MyThing
          screenProps={{
            current: this.state,
          }}
        />
      </Provider>
    );
  }
}