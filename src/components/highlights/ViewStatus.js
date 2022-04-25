import { Component } from 'react';
import Popular from './Popular';
import New from './New';

export default function ViewStatus(Comp) {
  return class extends Component {
    render() {
      if (this.props.views < 100) {
        return (
          <New>
            <Comp {...this.props} />
          </New>
        );
      }

      if (this.props.views >= 1000) {
        return (
          <Popular>
            <Comp {...this.props} />
          </Popular>
        );
      } 

      return <Comp {...this.props} />;
    }
  };
}
