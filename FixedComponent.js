The `getDerivedStateFromProps` static method should be used to update the state based on prop changes.  It receives the previous props and the current state as arguments and returns an object representing the new state. 

```javascript
import React from 'react';

class FixedComponent extends React.Component {

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.myProp !== prevState.myProp) {
      return {
        myProp: nextProps.myProp,
        // other state updates if needed 
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      myProp: props.myProp, 
    };
  }

  render() {
    return (
      <div>
        <p>My prop: {this.state.myProp}</p>
      </div>
    );
  }
}

export default FixedComponent;
```